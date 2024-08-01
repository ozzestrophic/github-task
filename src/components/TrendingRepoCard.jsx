import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/theme';
import moment from 'moment';
const TrendingRepoCard = ({repo}) => {
  return (
    <View style={styles.repoCard}>
      <View style={styles.repoCardHeader}>
        <Text style={styles.repoCardTag}>Trending repository</Text>
        <View style={styles.repoCardStarContainer}>
          <Text style={styles.repoCardStarLabel}>Star</Text>
          <View style={styles.repoCardStarCounterContainer}>
            <Text
              style={[styles.repoCardStarLabel, styles.repoCardStarCounter]}>
              {repo.stargazers_count}
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.repoCardTitle}>{repo.name}</Text>
      <Text style={styles.repoCardDescription}>{repo.description.trim()}</Text>
      <View style={styles.separator} />
      <View style={styles.repoCardFooter}>
        <Text style={(styles.silkaNormal, {flex: 3})}>
          Updated {moment(repo.updated_at).fromNow()}
        </Text>
        <Text style={(styles.silkaNormal, {flex: 2})}>{repo.language}</Text>
      </View>
    </View>
  );
};
export default TrendingRepoCard;
