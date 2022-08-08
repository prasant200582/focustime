import React from 'react';
import { View, Text , StyleSheet, FlatList} from 'react-native';
import { fontSizes, spacing } from "../utils/sizes";
import { colors } from "../utils/colors";

export const FocusHistory = ({ history }) => {
  
  if(!history || !history.length) return <Text style={styles.title}>We have'nt focused on anything yet!</Text>;
  const renderItem = ({item}) => <Text style={styles.item}>- {item}</Text>
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things We've Focused on:</Text>
      <FlatList 
        data={history}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:spacing.md,
    flex:1
  },
  item:{
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm
  },
  title:{
    color: colors.white,
    fontSize: fontSizes.lg,
    fontWeight: 'bold'
  }
})