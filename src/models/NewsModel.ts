export interface INewsModel {
    title: string, 
    contentEncoded: string,
    contentSnippet: string,
    pubDate: string,
    link: string,
    enclosure: {
        length: string,
        type: string,
        url: string,
    }
}