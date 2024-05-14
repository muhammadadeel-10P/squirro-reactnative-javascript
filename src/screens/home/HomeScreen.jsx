import React from 'react';
import {ActivityIndicator, RefreshControl, SafeAreaView} from 'react-native';
import {homeStyles} from './HomeScreenStyle';
import {useBookStoreListQuery} from '@/services/modules/books';
import {FlatList} from 'react-native-gesture-handler';
import {
  extractBookIds,
  findCountryById,
  getAuthorsList,
  getMatchingBooks,
  getTopSellingBooks,
} from '@/utils/FilterData';
import {Colors} from '@/utils/Colors';
import PlaceHolderTextView from '@/components/placeholder/PlaceholderTextView';
import BookStoreItem from '../../components/dynamic/bookstore/BookStoreItem';

const HomeScreen = () => {
  const {
    data: bookStoreData,
    isLoading: isLoadingStores,
    refetch,
  } = useBookStoreListQuery({}, {refetchOnFocus: true});

  //Store object
  function renderFlatList(item) {
    const bookIds = extractBookIds(item.relationships?.books);
    const filteredBooks = getMatchingBooks(bookStoreData.included, bookIds);
    const topSellingBooks = getTopSellingBooks(2, filteredBooks);
    const authorsList = getAuthorsList(bookStoreData.included);
    const country = findCountryById(
      item.relationships.countries.data.id,
      bookStoreData.included,
    ).attributes;

    return (
      <BookStoreItem
        store={item}
        topSellingBooks={topSellingBooks}
        authorsList={authorsList}
        country={country}
      />
    );
  }

  async function onRefresh() {
    await refetch();
  }

  function renderContentView() {
    return (
      <FlatList
        style={homeStyles.flatList}
        data={bookStoreData?.data ?? []}
        renderItem={item => renderFlatList(item.item)}
        keyExtractor={(item, index) => {
          return item.id + index;
        }}
        refreshControl={
          <RefreshControl
            refreshing={isLoadingStores}
            onRefresh={onRefresh}
            tintColor={Colors.primaryBlue}
          />
        }
        ListEmptyComponent={() => (
          <PlaceHolderTextView
            message={
              'Error connecting to the server.\nPlease start Squirro Book store API and swipe down to reload.'
            }
          />
        )}
      />
    );
  }

  return (
    <SafeAreaView style={homeStyles.container}>
      {!isLoadingStores ? (
        renderContentView()
      ) : (
        <ActivityIndicator size="large" color={Colors.primaryBlue} />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
