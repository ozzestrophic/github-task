import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/theme';
const TrendingRepoCard = () => {
  return (
    <View style={styles.repoCard}>
      <View style={styles.repoCardHeader}>
        <Text style={styles.repoCardTag}>Trending repository</Text>
        <View style={styles.repoCardStarContainer}>
          <Text style={styles.repoCardStarLabel}>Star</Text>
          <View style={styles.repoCardStarCounterContainer}>
            <Text
              style={[styles.repoCardStarLabel, styles.repoCardStarCounter]}>
              40.5K
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.repoCardTitle}>RepoCard</Text>
      <Text style={styles.repoCardDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </Text>
      <View style={styles.separator} />
      <View style={styles.repoCardFooter}>
        <Text style={(styles.silkaNormal, {flex: 3})}>
          Updated 12 hours ago
        </Text>
        <Text style={(styles.silkaNormal, {flex: 2})}>C++</Text>
      </View>
    </View>
  );
};
export default TrendingRepoCard;
