// screens/SummaryScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SummaryScreen = () => {
  const [transactions] = useState([
    { id: '1', amount: 50 },
    { id: '2', amount: 30 },
    { id: '3', amount: 10 },
  ]);

  const totalExpenses = transactions.reduce((sum, item) => sum + item.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Financial Summary</Text>
      <Text style={styles.totalLabel}>Total Expenses</Text>
      <Text style={styles.totalAmount}>${totalExpenses}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 20,
  },
  totalLabel: {
    fontSize: 18,
    color: '#888',
  },
  totalAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#6200EE',
    marginTop: 10,
  },
});

export default SummaryScreen;
