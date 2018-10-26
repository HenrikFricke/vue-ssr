import axios from 'axios'

export class CategoryRepository {
  static baseURL = 'https://cdn.contentful.com'

  constructor(spaceId, accessToken) {
    this.spaceId = spaceId
    this.accessToken = accessToken
  }

  async findAll() {
    const { data } = await this._fetch(
      `/spaces/${
        this.spaceId
      }/environments/master/entries?content_type=category`
    )

    return data.items.map(this._normalize)
  }

  async _fetch(path) {
    return axios.get(CategoryRepository.baseURL + path, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    })
  }

  _normalize(category) {
    return {
      id: category.sys.id,
      name: category.fields.name,
      slug: category.fields.slug
    }
  }
}
