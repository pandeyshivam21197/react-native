const stacks = {
    AppStack: 'AppStack',
    HomeStack: 'HomeStack',
    DonationStack: 'DonationStack',
    DistributorStack: 'DistributorStack',
    AccountStack: 'AccountSStack',
};

const appScreens = {
    HomeScreen: 'HomeScreen',
    DonationScreen: 'DonationScreen',
    DistributorScreen: 'DistributorScreen',
    AccountScreen: 'AccountScreen',
};

const bootStrapScreens = {
    SplashScreen: '',
    OnBoardingScreen: '',
    SingInScreen: '',
    LoginScreen: '',
};

export const RoutesNames = {
    // bootstrap Routes
    ...bootStrapScreens,
    // stack Routes
    ...stacks,
    // app routes
    ...appScreens,
};

export default RoutesNames;
