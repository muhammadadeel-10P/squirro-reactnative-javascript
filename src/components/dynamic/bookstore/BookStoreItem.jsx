import React from 'react';
import {bookStoreItemStyle} from './BookStoreItemStyle';
import {Image, Text, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import {findAutherById} from '@/utils/FilterData';
import {useCountryDataQuery} from '@/services/modules/flags';
import {formatDateFromString} from '@/utils/DateUtils';

const BookStoreItem = ({store, topSellingBooks, authorsList, country}) => {
  const {data: countryData} = useCountryDataQuery(
    {
      code: country?.code ?? '',
    },
    {refetchOnFocus: true},
  );

  function renderBestSellingItem() {
    if (topSellingBooks.length > 0) {
      return topSellingBooks.map(item => {
        const author = findAutherById(
          item.relationships?.author?.data?.id ?? '',
          authorsList,
        );
        return (
          <View style={bookStoreItemStyle.bookItemContainer} key={item.id}>
            <Text style={bookStoreItemStyle.bookText}>
              {item.attributes.name ?? ''}
            </Text>
            <View style={bookStoreItemStyle.bookAuthorContainer}>
              <Text style={bookStoreItemStyle.bookText}>
                {author?.attributes.fullName ?? ''}
              </Text>
            </View>
          </View>
        );
      });
    } else {
      return (
        <View style={bookStoreItemStyle.bookItemContainer}>
          <Text style={bookStoreItemStyle.bookText}>No data available</Text>
          <View style={bookStoreItemStyle.bookAuthorContainer}>
            <Text style={bookStoreItemStyle.bookText}>{''}</Text>
          </View>
        </View>
      );
    }
  }

  function renderFooterView() {
    return (
      <View style={bookStoreItemStyle.footer}>
        <Text style={bookStoreItemStyle.footerText}>
          {formatDateFromString(store.attributes.establishmentDate) +
            ` - ${store.attributes.website.replace('https://', '')}`}
        </Text>
        <View style={bookStoreItemStyle.flagContainer}>
          {/* Since api returns svg icon url or unicode. So displaying flag in text using unicode*/}
          <Text style={bookStoreItemStyle.flagUnicode}>
            {countryData?.data?.unicodeFlag}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={bookStoreItemStyle.mainContainer}>
      <View style={bookStoreItemStyle.contentContainer}>
        <View style={bookStoreItemStyle.logoContainer}>
          <Image
            style={bookStoreItemStyle.logo}
            source={{uri: store.attributes.storeImage}}
          />
        </View>
        <View style={bookStoreItemStyle.content}>
          <View style={bookStoreItemStyle.headerContainer}>
            <Text style={bookStoreItemStyle.header}>
              {store.attributes.name}
            </Text>
            <View style={bookStoreItemStyle.rating} pointerEvents="none">
              <Rating
                type="star"
                ratingCount={5}
                imageSize={15}
                onFinishRating={undefined}
                startingValue={store.attributes.rating}
                fractions={2}
                showReadOnlyText={false}
              />
            </View>
          </View>
          <View style={bookStoreItemStyle.bookList}>
            <Text style={bookStoreItemStyle.subheader}>Best-selling books</Text>
            {renderBestSellingItem()}
          </View>
        </View>
      </View>
      {renderFooterView()}
    </View>
  );
};

export default BookStoreItem;
