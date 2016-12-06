// @flow

import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';

import Themable from '../hoc/Themable';
import TransparentTextOverlay from '../TransparentTextOverlay';

import {
  ContentRow,
  HighlightContainerRow1,
  LeftColumn,
  MainColumn,
  RepositoryContentContainer,
  Text,
} from './';

import { contentPadding, radius } from '../../styles/variables';
import type { GithubEventType, ThemeObject } from '../../utils/types';

@Themable
export default class extends React.PureComponent {
  props: {
    branch: string,
    narrow: boolean,
    theme?: ThemeObject,
    type: GithubEventType,
  };

  render() {
    const { branch, narrow, theme, type } = this.props;

    const _branch = (branch || '').replace('refs/heads/', '');
    if (!_branch) return null;

    const isBranchMainEventAction = type === 'CreateEvent' || type === 'DeleteEvent';
    if (_branch === 'master' && !isBranchMainEventAction) return null;

    return (
      <ContentRow narrow={narrow}>
        <LeftColumn />

        <MainColumn>
          <HighlightContainerRow1>
            <TransparentTextOverlay
              color={theme.base01}
              size={contentPadding}
              from="right"
              radius={radius}
            >
              <RepositoryContentContainer>
                <Text numberOfLines={1} muted={!isBranchMainEventAction}>
                  <Icon name="git-branch" />&nbsp;
                  {_branch}
                </Text>
              </RepositoryContentContainer>
            </TransparentTextOverlay>
          </HighlightContainerRow1>
        </MainColumn>
      </ContentRow>
    );
  }
}