import { Messages } from './app.messages';
import { environment } from '../../environments/environment';
export class AppUrls {

	//Wrapper services and Servicepoint url's
	public static URLs = {
		// isDevelopment: true,
		// URL: "",
		isDevelopment: false,
		URL: "",
		RANDOM_USER: 'https://randomuser.me/api/',
		GOOGLE_NEWS: 'https://newsapi.org/v2/top-headlines?sources=google-news&apiKey='+ environment.google_api_key
	}

	public static getpath(url) {

		//Production path
		let path = (this.URLs.URL+url);

		//Development path
		let development_path = ('assets/responses/'+ url+ '.json');

		return (this.URLs.isDevelopment ? development_path : path);
	}
}