import axios from 'axios'

export class ArticleRepository {
  static baseURL = 'https://cdn.contentful.com'

  constructor(spaceId, accessToken) {
    this.spaceId = spaceId
    this.accessToken = accessToken

    this._normalize = this._normalize.bind(this)
    this._getTeaserImage = this._getTeaserImage.bind(this)
  }

  async findAll() {
    const { data } = await this._fetch(
      `/spaces/${this.spaceId}/environments/master/entries?content_type=article`
    )

    return data.items.map(article => this._normalize(article, data))
  }

  async _fetch(path) {
    return axios.get(ArticleRepository.baseURL + path, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    })
  }

  _normalize(article, data) {
    return {
      id: article.sys.id,
      updateAt: article.sys.updatedAt,
      createdAt: article.sys.createdAt,
      headline: article.fields.headline,
      subheadline: article.fields.subheadline,
      teaser: article.fields.teaser,
      source: article.fields.source,
      tags: article.fields.tags,
      teaserImage: this._getTeaserImage(article, data)
    }
  }

  _getTeaserImage(article, data) {
    const teaserImage = article.fields.teaserImage
    const assetId = teaserImage.sys.id
    const asset = data.includes.Asset.find(asset => asset.sys.id === assetId)

    return asset.fields.file.url
  }
}
