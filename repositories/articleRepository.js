import axios from 'axios'

export class ArticleRepository {
  static baseURL = 'https://cdn.contentful.com'

  constructor(spaceId, accessToken) {
    this.spaceId = spaceId
    this.accessToken = accessToken
  }

  async findAll() {
    const { data } = await this._fetch(
      '/spaces/in5y38gfylmu/environments/master/entries?content_type=article'
    )

    return data.items.map(this._normalize)
  }

  async _fetch(path) {
    return axios.get(ArticleRepository.baseURL + path, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    })
  }

  _normalize(article) {
    return {
      id: article.sys.id,
      updateAt: article.sys.updatedAt,
      createdAt: article.sys.createdAt,
      headline: article.fields.headline,
      subheadline: article.fields.subheadline,
      teaser: article.fields.teaser,
      source: article.fields.source,
      tags: article.fields.tags
    }
  }
}
