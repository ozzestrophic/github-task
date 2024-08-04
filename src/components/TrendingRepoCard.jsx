import React from 'react';
import {Text, View} from 'react-native';
import styles, {darkColors, lightColors} from '../styles/theme';
import moment from 'moment';
import {useSelector} from 'react-redux';
const TrendingRepoCard = ({repo}) => {
  let starsCount = repo.stargazers_count;
  if (starsCount > 1000) {
    starsCount = Math.round(starsCount / 1000) + 'k';
  }
  const colorMode = useSelector(state => state.colorMode.mode);
  const theme = colorMode === 'light' ? lightColors : darkColors;
  return (
    <View
      style={[
        styles.repoCard,
        theme.primary_background,
        theme.secondary_border,
      ]}>
      <View style={styles.repoCardHeader}>
        <Text style={[styles.repoCardTag, theme.tertiary_text]}>
          Trending repository
        </Text>
        <View style={styles.repoCardStarContainer}>
          <Text style={[styles.repoCardStarLabel, theme.secondary_text]}>
            Star
          </Text>
          <View
            style={[
              styles.repoCardStarCounterContainer,
              theme.accent_color_background,
            ]}>
            <Text
              style={[
                styles.repoCardStarLabel,
                colorMode === 'light' ? theme.primary_text : theme.accent_color,
              ]}>
              {starsCount}
            </Text>
          </View>
        </View>
      </View>
      <Text style={[styles.repoCardTitle, theme.primary_text]}>
        {repo.name}
      </Text>
      <Text style={[styles.repoCardDescription, theme.secondary_text]}>
        {repo.description ? repo.description.trim() : ''}
      </Text>
      <View style={styles.separator} />
      <View style={styles.repoCardFooter}>
        <Text style={[styles.silkaNormal, styles.flex3, theme.tertiary_text]}>
          Updated {moment(repo.updated_at).fromNow()}
        </Text>
        <Text style={[styles.silkaNormal, styles.flex2, theme.tertiary_text]}>
          {repo.language}
        </Text>
      </View>
    </View>
  );
};
export default TrendingRepoCard;
