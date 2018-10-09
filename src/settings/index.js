export default {
	apiUrl: 'http://yoursite.com/api/',
};

const siteConfig = {
	siteName: 'MetaAdmin',
	siteIcon: 'ion-flash',
	footerText: 'MetaAdmin ©2018 Created by RedQ, Inc',
	enableAnimatedRoute: false,
};
const themeConfig = {
	topbar: 'themedefault',
	sidebar: 'themedefault',
	layout: 'themedefault',
	theme: 'themedefault',
	showBreadCrumb: true,
};
const language = 'english';
const AlgoliaSearchConfig = {
	appId: '',
	apiKey: '',
};
const Auth0Config = {
	domain: '',
	clientID: '',
	audience: '',
	options: {
		auth: {
			autoParseHash: true,
			redirect: false,
		},
		languageDictionary: {
			title: 'Metaadmin',
			emailInputPlaceholder: 'demo@gmail.com',
			passwordInputPlaceholder: 'demodemo',
		},
		icon: '',
		theme: {
			labeledSubmitButton: true,
			logo: '',
			primaryColor: '#E14615',
			authButtons: {
				connectionName: {
					displayName: 'Log In',
					primaryColor: '#b7b7b7',
					foregroundColor: '#000000',
					icon: undefined,
				},
			},
		},
	},
};
const firebaseConfig = {
	apiKey: "AIzaSyDCke7W_vkbjhBRBRBrf9a1uvSOqwm9jz4",
    authDomain: "eaglechat-533c7.firebaseapp.com",
    databaseURL: "https://eaglechat-533c7.firebaseio.com",
    projectId: "eaglechat-533c7",
    storageBucket: "eaglechat-533c7.appspot.com",
    messagingSenderId: "398955216542"
};
const googleConfig = {
	apiKey: '', //
};
const mapboxConfig = {
	tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
	maxZoom: 18,
	defaultZoom: 11,
	center: [0, 0],
};
const youtubeSearchApi = '';

const instagramConfig = {
	instagramUserInfoApiUrl:
		'https://api.instagram.com/v1/users/self/?access_token=',
	instagramUserMediaApiUrl:
		'https://api.instagram.com/v1/users/self/media/recent/?access_token=',
	accessToken: '',
};

const jwtConfig = {
	fetchUrl: '/api/',
	secretKey: 'secretKey',
};

export {
	siteConfig,
	language,
	themeConfig,
	AlgoliaSearchConfig,
	Auth0Config,
	firebaseConfig,
	googleConfig,
	mapboxConfig,
	youtubeSearchApi,
	instagramConfig,
	jwtConfig,
};
