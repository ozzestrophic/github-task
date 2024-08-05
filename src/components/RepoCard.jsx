import React from 'react';
import {Text, View} from 'react-native';
import styles, {darkColors, lightColors} from '../styles/theme';
import {useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-regular-svg-icons/faStar';
import {faFileLines} from '@fortawesome/free-regular-svg-icons/faFileLines';
import {faCodeBranch} from '@fortawesome/free-solid-svg-icons/faCodeBranch';

const RepoCard = ({repo}) => {
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
      <View style={styles.repoCardTitleContainer}>
        <FontAwesomeIcon
          icon={faFileLines}
          style={theme.accent_color}
          size={20}
        />
        <Text style={[styles.repoCardTitle, theme.primary_text]}>
          {repo.name}
        </Text>
      </View>
      <Text style={[styles.repoCardDescription, theme.secondary_text]}>
        {repo.description ? repo.description.trim() : ''}
      </Text>
      <View style={styles.separator} />
      <View style={styles.repoCardFooter}>
        <Text style={[styles.silkaNormal, theme.secondary_text]}>
          {repo.language}
        </Text>
        <View style={styles.repoCardStarContainer}>
          <FontAwesomeIcon icon={faStar} style={theme.accent_color} size={16} />

          <Text style={[styles.repoCardStarLabel, theme.secondary_text]}>
            {Number(repo.stargazers_count).toLocaleString()}
          </Text>
        </View>
        <View style={styles.repoCardStarContainer}>
          <FontAwesomeIcon
            icon={faCodeBranch}
            style={theme.accent_color}
            size={14}
          />

          <Text style={[styles.repoCardStarLabel, theme.secondary_text]}>
            {Number(repo.forks).toLocaleString()}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default RepoCard;
