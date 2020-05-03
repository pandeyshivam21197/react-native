import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import CardList from '@components/organisms/CardList';
import Card from '@components/molecules/Card';
import {ICampaignRequest} from '@domain/interfaces';
import {theme} from '@styles/theme';
import StateAwareComponent from '@components/organisms/StateAwareComponent';

class DonationScreen extends React.PureComponent<any, any> {
  componentDidMount() {
    this.getHomeFeeds();
  }

  public getHomeFeeds = (): void => {
    const {getHomeFeeds} = this.props;
    const {page} = this.state;
    getHomeFeeds(page);
  };

  render() {
    const {isFeedsLoading, isFeedsError} = this.props;
    return (
      <SafeAreaView style={[styles.container, styles.flexOne]}>
        <StateAwareComponent
          loading={isFeedsLoading}
          error={isFeedsError}
          renderComponent={this.renderScreen()}
          onErrorPress={this.getHomeFeeds}
        />
      </SafeAreaView>
    );
  }

  public renderScreen = (): React.ReactNode => {
    const {feeds} = this.props;
    if (!feeds) {
      return null;
    }

    return (
      <View style={[styles.screenConatiner, styles.flexOne]}>
        <CardList
          data={feeds}
          isHorizontal={false}
          renderItem={this.renderHomeCard}
        />
      </View>
    );
  };

  public renderHomeCard = ({
    item,
    index,
  }: {
    item: ICampaignRequest;
    index: number;
  }): React.ReactElement => {
    const {
      _id,
      title,
      subTitle,
      status,
      description,
      thumbnails,
      creatorId,
      donerIds,
      groupMemberIds,
    } = item;

    return (
      <Card
        _id={_id}
        title={title}
        status={status}
        subTitle={subTitle}
        description={description}
        thumbnails={thumbnails}
        creatorId={creatorId}
        donerIds={donerIds}
        groupMemberIds={groupMemberIds}
        cardIndex={index}
      />
    );
  };
}

export default DonationScreen;

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  container: {
    backgroundColor: theme.colors.raisinBlack,
    borderBottomColor: theme.colors.white,
    borderBottomWidth: theme.layout.screenBottomBorderWidth,
  },
  screenConatiner: {
    marginHorizontal: theme.layout.screenHorizontalMargin,
    marginVertical: theme.layout.screenVerticalMargin,
  },
});
