import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppUser} from '../provider/FacebookProvider';

export type RootStackParamList = {
  Login: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Streaming: {token: string};
  Home: undefined;
  GoLive: {
    channel: string;
    type: string;
    token: string;
    streamDetails: any;
    isFaceBookShare: boolean;
  };
  StartStream: {
    onStart: (
      inputText: string,
      selectedFriends: AppUser[],
      isFaceBookShare: boolean,
    ) => void;
  };
};

export type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

export type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

export type SignInScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignIn'
>;

export type StartStreamScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'StartStream'
>;
export type StartStreamRouteProp = RouteProp<RootStackParamList, 'StartStream'>;

export type GoLiveScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'GoLive'
>;
export type GoLiveRouteProp = RouteProp<RootStackParamList, 'GoLive'>;
