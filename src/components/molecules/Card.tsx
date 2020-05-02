import {Text} from '@components/atoms/Text';
import EntityList from '@components/molecules/EntityList';
import StatusHeader from '@components/molecules/StatusHeader';
import ThumbnailList from '@components/molecules/ThumbnailList';
import {ICampaignRequest} from '@domain/interfaces';
import * as React from 'react';
import {StyleProp, View, ViewStyle, StyleSheet} from 'react-native';
import {theme} from '@styles/theme';

export interface ICard extends ICampaignRequest {
  containerStyle?: StyleProp<ViewStyle>;
  cardIndex: number;
}

const Card = (props: ICard): React.ReactElement => {
  const {
    title,
    subTitle,
    status,
    entities,
    description,
    thumbnails,
    containerStyle = {},
    cardIndex,
  } = props;
  // TODO: add total progress bar
  return (
    <View style={[styles.cardConatiner, containerStyle]}>
      <StatusHeader title={title} status={status} subTitle={subTitle} />
      {entities && <EntityList data={entities} cardIndex={cardIndex} />}
      {thumbnails && <ThumbnailList data={thumbnails} cardIndex={cardIndex} />}
      {description ? <Text>{description}</Text> : null}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardConatiner: {
    backgroundColor: theme.colors.nero,
  },
});
