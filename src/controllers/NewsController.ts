import { INewsModel } from '../models/NewsModel';
import { addAllNewsAction } from '../store/actions/actionCreators';
import { LinkStateToProps, LinkDispatchToProps } from '../containers/NewsList';
import rssParser from 'rss-parser';

type Props = LinkStateToProps & LinkDispatchToProps;

class NewsController {
    private props: Props | undefined;

    public setProps(props: Props) {
        this.props = props;
    }

    public mapToNewsModel = (data: any): INewsModel => ({
        title: data.title, 
        contentEncoded: data.content,
        contentSnippet: data.contentSnippet,
        pubDate: data.pubDate,
        link: data.link,
        enclosure: {
            length: data.enclosure.length,
            type: data.enclosure.type,
            url: data.enclosure.url,
        }
    });

    public loadNews = async (): Promise<any> => {
        try {
            const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
            let parser = new rssParser();            
            return await parser.parseURL(
                CORS_PROXY + 'https://www.realitatea.net/share/atom/homepage.xml',
                (err, rss) => {
                    if (rss && rss.items !== undefined) {
                        this.props && this.props.addAllNewsAction(rss.items.map( item =>
                            this.mapToNewsModel(item)
                        ));
                    }
                }
            );
        } catch (error) {
            return 'error';
        }
    }
}

export const newsController = new NewsController();