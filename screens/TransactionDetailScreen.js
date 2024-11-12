// screens/TransactionDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{transaction.name}</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Amount</Text>
        <Text style={styles.amount}>${transaction.amount}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Date</Text>
        <Text style={styles.date}>{transaction.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  detailContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    color: '#888',
  },
  amount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6200EE',
  },
  date: {
    fontSize: 16,
    color: '#333',
  },
});

export default TransactionDetailScreen;
