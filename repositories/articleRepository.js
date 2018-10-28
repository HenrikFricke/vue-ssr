import axios from 'axios'

export class ArticleRepository {
  static baseURL = 'https://cdn.contentful.com'

  constructor(spaceId, accessToken) {
    this.spaceId = spaceId
    this.accessToken = accessToken

    this._normalize = this._normalize.bind(this)
    this._getTeaserImage = this._getTeaserImage.bind(this)
    this._getCategory = this._getCategory.bind(this)
  }

  async findBySlug(slug) {
    const { data } = await this._fetch(
      `/spaces/${
        this.spaceId
      }/environments/master/entries?content_type=article&fields.slug=${slug}`
    )

    if (data.items.length === 0) {
      throw new Error('Unknown article')
    }

    return this._normalize(data.items[0], data)
  }

  async findAll() {
    const { data } = await this._fetch(
      `/spaces/${this.spaceId}/environments/master/entries?content_type=article`
    )

    return data.items.map(article => this._normalize(article, data))
  }

  async findAllRecommendations(articleId, limit) {
    const { data } = await this._fetch(
      `/spaces/${
        this.spaceId
      }/environments/master/entries?content_type=article&limit=${limit}&sys.id[ne]=${articleId}`
    )

    return data.items.map(article => this._normalize(article, data))
  }

  async findAllByCategory(categoryId) {
    const { data } = await this._fetch(
      `/spaces/${
        this.spaceId
      }/environments/master/entries?content_type=article&fields.category.sys.id=${categoryId}`
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
      teaserImage: this._getTeaserImage(article, data),
      slug: article.fields.slug,
      category: this._getCategory(article, data),
      content: article.fields.content
    }
  }

  _getTeaserImage(article, data) {
    const teaserImage = article.fields.teaserImage
    const assetId = teaserImage.sys.id
    const asset = data.includes.Asset.find(asset => asset.sys.id === assetId)

    return `${asset.fields.file.url}?w=960&fm=jpg&fl=progressive`
  }

  _getCategory(article, data) {
    const category = article.fields.category
    const entryId = category.sys.id
    const entry = data.includes.Entry.find(entry => entry.sys.id === entryId)

    return { slug: entry.fields.slug }
  }
}
