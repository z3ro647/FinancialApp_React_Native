// screens/TransactionsListScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const TransactionsListScreen = ({ navigation }) => {
  const [transactions] = useState([
    { id: '1', name: 'Grocery', amount: 50, date: '2024-10-20' },
    { id: '2', name: 'Restaurant', amount: 30, date: '2024-10-21' },
    { id: '3', name: 'Subscription', amount: 10, date: '2024-10-22' },
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}>
      <View>
        <Text style={styles.transactionName}>{item.name}</Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>
      <Text style={styles.transactionAmount}>${item.amount}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList data={transactions} keyExtractor={item => item.id} renderItem={renderItem} style={styles.list} />
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#f5f5f5',
  },
  item: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 3,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  transactionDate: {
    fontSize: 12,
    color: '#888',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6200EE',
  },
});

export default TransactionsListScreen;
