export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
  /** Input type for dynamic zone data of Content */
  ContentDataDynamicZoneInput: any
  /** Input type for dynamic zone data of Screen */
  ScreenDataDynamicZoneInput: any
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
  /** A time string with format: HH:mm:ss.SSS */
  Time: any
  /** The `Long` scalar type represents 52-bit integers */
  Long: any
}

export type Adcampaign = {
  __typename?: 'Adcampaign'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  advertiser?: Maybe<Advertiser>
  name?: Maybe<Scalars['String']>
  expiry?: Maybe<Scalars['Date']>
  active?: Maybe<Scalars['Boolean']>
  created_by?: Maybe<AdminUser>
  updated_by?: Maybe<AdminUser>
  banners?: Maybe<Array<Maybe<Banner>>>
}

export type AdcampaignBannersArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type AdcampaignAggregator = {
  __typename?: 'AdcampaignAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type AdcampaignConnection = {
  __typename?: 'AdcampaignConnection'
  values?: Maybe<Array<Maybe<Adcampaign>>>
  groupBy?: Maybe<AdcampaignGroupBy>
  aggregate?: Maybe<AdcampaignAggregator>
}

export type AdcampaignConnectionActive = {
  __typename?: 'AdcampaignConnectionActive'
  key?: Maybe<Scalars['Boolean']>
  connection?: Maybe<AdcampaignConnection>
}

export type AdcampaignConnectionAdvertiser = {
  __typename?: 'AdcampaignConnectionAdvertiser'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<AdcampaignConnection>
}

export type AdcampaignConnectionCreated_At = {
  __typename?: 'AdcampaignConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<AdcampaignConnection>
}

export type AdcampaignConnectionCreated_By = {
  __typename?: 'AdcampaignConnectionCreated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<AdcampaignConnection>
}

export type AdcampaignConnectionExpiry = {
  __typename?: 'AdcampaignConnectionExpiry'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<AdcampaignConnection>
}

export type AdcampaignConnectionId = {
  __typename?: 'AdcampaignConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<AdcampaignConnection>
}

export type AdcampaignConnectionName = {
  __typename?: 'AdcampaignConnectionName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<AdcampaignConnection>
}

export type AdcampaignConnectionUpdated_At = {
  __typename?: 'AdcampaignConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<AdcampaignConnection>
}

export type AdcampaignConnectionUpdated_By = {
  __typename?: 'AdcampaignConnectionUpdated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<AdcampaignConnection>
}

export type AdcampaignGroupBy = {
  __typename?: 'AdcampaignGroupBy'
  id?: Maybe<Array<Maybe<AdcampaignConnectionId>>>
  created_at?: Maybe<Array<Maybe<AdcampaignConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<AdcampaignConnectionUpdated_At>>>
  advertiser?: Maybe<Array<Maybe<AdcampaignConnectionAdvertiser>>>
  name?: Maybe<Array<Maybe<AdcampaignConnectionName>>>
  expiry?: Maybe<Array<Maybe<AdcampaignConnectionExpiry>>>
  active?: Maybe<Array<Maybe<AdcampaignConnectionActive>>>
  created_by?: Maybe<Array<Maybe<AdcampaignConnectionCreated_By>>>
  updated_by?: Maybe<Array<Maybe<AdcampaignConnectionUpdated_By>>>
}

export type AdcampaignInput = {
  advertiser?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  expiry?: Maybe<Scalars['Date']>
  active?: Maybe<Scalars['Boolean']>
  banners?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type Adlocation = {
  __typename?: 'Adlocation'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  slug?: Maybe<Scalars['String']>
  position?: Maybe<Enum_Adlocation_Position>
  screen?: Maybe<Screen>
  created_by?: Maybe<AdminUser>
  updated_by?: Maybe<AdminUser>
  banners?: Maybe<Array<Maybe<Banner>>>
}

export type AdlocationBannersArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type AdlocationAggregator = {
  __typename?: 'AdlocationAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type AdlocationConnection = {
  __typename?: 'AdlocationConnection'
  values?: Maybe<Array<Maybe<Adlocation>>>
  groupBy?: Maybe<AdlocationGroupBy>
  aggregate?: Maybe<AdlocationAggregator>
}

export type AdlocationConnectionCreated_At = {
  __typename?: 'AdlocationConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<AdlocationConnection>
}

export type AdlocationConnectionCreated_By = {
  __typename?: 'AdlocationConnectionCreated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<AdlocationConnection>
}

export type AdlocationConnectionId = {
  __typename?: 'AdlocationConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<AdlocationConnection>
}

export type AdlocationConnectionPosition = {
  __typename?: 'AdlocationConnectionPosition'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<AdlocationConnection>
}

export type AdlocationConnectionScreen = {
  __typename?: 'AdlocationConnectionScreen'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<AdlocationConnection>
}

export type AdlocationConnectionSlug = {
  __typename?: 'AdlocationConnectionSlug'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<AdlocationConnection>
}

export type AdlocationConnectionUpdated_At = {
  __typename?: 'AdlocationConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<AdlocationConnection>
}

export type AdlocationConnectionUpdated_By = {
  __typename?: 'AdlocationConnectionUpdated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<AdlocationConnection>
}

export type AdlocationGroupBy = {
  __typename?: 'AdlocationGroupBy'
  id?: Maybe<Array<Maybe<AdlocationConnectionId>>>
  created_at?: Maybe<Array<Maybe<AdlocationConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<AdlocationConnectionUpdated_At>>>
  slug?: Maybe<Array<Maybe<AdlocationConnectionSlug>>>
  position?: Maybe<Array<Maybe<AdlocationConnectionPosition>>>
  screen?: Maybe<Array<Maybe<AdlocationConnectionScreen>>>
  created_by?: Maybe<Array<Maybe<AdlocationConnectionCreated_By>>>
  updated_by?: Maybe<Array<Maybe<AdlocationConnectionUpdated_By>>>
}

export type AdlocationInput = {
  slug?: Maybe<Scalars['String']>
  position?: Maybe<Enum_Adlocation_Position>
  banners?: Maybe<Array<Maybe<Scalars['ID']>>>
  screen?: Maybe<Scalars['ID']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type AdminUser = {
  __typename?: 'AdminUser'
  id: Scalars['ID']
  username?: Maybe<Scalars['String']>
}

export type Advertiser = {
  __typename?: 'Advertiser'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  company?: Maybe<Scalars['String']>
  campaign?: Maybe<Enum_Advertiser_Campaign>
  created_by?: Maybe<AdminUser>
  updated_by?: Maybe<AdminUser>
  media?: Maybe<Array<Maybe<UploadFile>>>
  adcampaigns?: Maybe<Array<Maybe<Adcampaign>>>
  banners?: Maybe<Array<Maybe<Banner>>>
}

export type AdvertiserMediaArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type AdvertiserAdcampaignsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type AdvertiserBannersArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type AdvertiserAggregator = {
  __typename?: 'AdvertiserAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type AdvertiserConnection = {
  __typename?: 'AdvertiserConnection'
  values?: Maybe<Array<Maybe<Advertiser>>>
  groupBy?: Maybe<AdvertiserGroupBy>
  aggregate?: Maybe<AdvertiserAggregator>
}

export type AdvertiserConnectionCampaign = {
  __typename?: 'AdvertiserConnectionCampaign'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<AdvertiserConnection>
}

export type AdvertiserConnectionCompany = {
  __typename?: 'AdvertiserConnectionCompany'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<AdvertiserConnection>
}

export type AdvertiserConnectionCreated_At = {
  __typename?: 'AdvertiserConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<AdvertiserConnection>
}

export type AdvertiserConnectionCreated_By = {
  __typename?: 'AdvertiserConnectionCreated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<AdvertiserConnection>
}

export type AdvertiserConnectionEmail = {
  __typename?: 'AdvertiserConnectionEmail'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<AdvertiserConnection>
}

export type AdvertiserConnectionId = {
  __typename?: 'AdvertiserConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<AdvertiserConnection>
}

export type AdvertiserConnectionName = {
  __typename?: 'AdvertiserConnectionName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<AdvertiserConnection>
}

export type AdvertiserConnectionUpdated_At = {
  __typename?: 'AdvertiserConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<AdvertiserConnection>
}

export type AdvertiserConnectionUpdated_By = {
  __typename?: 'AdvertiserConnectionUpdated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<AdvertiserConnection>
}

export type AdvertiserGroupBy = {
  __typename?: 'AdvertiserGroupBy'
  id?: Maybe<Array<Maybe<AdvertiserConnectionId>>>
  created_at?: Maybe<Array<Maybe<AdvertiserConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<AdvertiserConnectionUpdated_At>>>
  name?: Maybe<Array<Maybe<AdvertiserConnectionName>>>
  email?: Maybe<Array<Maybe<AdvertiserConnectionEmail>>>
  company?: Maybe<Array<Maybe<AdvertiserConnectionCompany>>>
  campaign?: Maybe<Array<Maybe<AdvertiserConnectionCampaign>>>
  created_by?: Maybe<Array<Maybe<AdvertiserConnectionCreated_By>>>
  updated_by?: Maybe<Array<Maybe<AdvertiserConnectionUpdated_By>>>
}

export type AdvertiserInput = {
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  company?: Maybe<Scalars['String']>
  campaign?: Maybe<Enum_Advertiser_Campaign>
  media?: Maybe<Array<Maybe<Scalars['ID']>>>
  adcampaigns?: Maybe<Array<Maybe<Scalars['ID']>>>
  banners?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type Author = {
  __typename?: 'Author'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  avatar?: Maybe<UploadFile>
  created_by?: Maybe<AdminUser>
  updated_by?: Maybe<AdminUser>
  blogs?: Maybe<Array<Maybe<Blog>>>
}

export type AuthorBlogsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type AuthorAggregator = {
  __typename?: 'AuthorAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type AuthorConnection = {
  __typename?: 'AuthorConnection'
  values?: Maybe<Array<Maybe<Author>>>
  groupBy?: Maybe<AuthorGroupBy>
  aggregate?: Maybe<AuthorAggregator>
}

export type AuthorConnectionAvatar = {
  __typename?: 'AuthorConnectionAvatar'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<AuthorConnection>
}

export type AuthorConnectionBio = {
  __typename?: 'AuthorConnectionBio'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<AuthorConnection>
}

export type AuthorConnectionCreated_At = {
  __typename?: 'AuthorConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<AuthorConnection>
}

export type AuthorConnectionCreated_By = {
  __typename?: 'AuthorConnectionCreated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<AuthorConnection>
}

export type AuthorConnectionEmail = {
  __typename?: 'AuthorConnectionEmail'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<AuthorConnection>
}

export type AuthorConnectionId = {
  __typename?: 'AuthorConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<AuthorConnection>
}

export type AuthorConnectionName = {
  __typename?: 'AuthorConnectionName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<AuthorConnection>
}

export type AuthorConnectionUpdated_At = {
  __typename?: 'AuthorConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<AuthorConnection>
}

export type AuthorConnectionUpdated_By = {
  __typename?: 'AuthorConnectionUpdated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<AuthorConnection>
}

export type AuthorGroupBy = {
  __typename?: 'AuthorGroupBy'
  id?: Maybe<Array<Maybe<AuthorConnectionId>>>
  created_at?: Maybe<Array<Maybe<AuthorConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<AuthorConnectionUpdated_At>>>
  name?: Maybe<Array<Maybe<AuthorConnectionName>>>
  email?: Maybe<Array<Maybe<AuthorConnectionEmail>>>
  bio?: Maybe<Array<Maybe<AuthorConnectionBio>>>
  avatar?: Maybe<Array<Maybe<AuthorConnectionAvatar>>>
  created_by?: Maybe<Array<Maybe<AuthorConnectionCreated_By>>>
  updated_by?: Maybe<Array<Maybe<AuthorConnectionUpdated_By>>>
}

export type AuthorInput = {
  blogs?: Maybe<Array<Maybe<Scalars['ID']>>>
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  avatar?: Maybe<Scalars['ID']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type Banner = {
  __typename?: 'Banner'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  title?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  advertiser?: Maybe<Advertiser>
  expiry?: Maybe<Scalars['Date']>
  size?: Maybe<Enum_Banner_Size>
  adcampaign?: Maybe<Adcampaign>
  adlocation?: Maybe<Adlocation>
  notes?: Maybe<Scalars['String']>
  created_by?: Maybe<AdminUser>
  updated_by?: Maybe<AdminUser>
  image?: Maybe<Array<Maybe<UploadFile>>>
  screens?: Maybe<Array<Maybe<Screen>>>
}

export type BannerImageArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type BannerScreensArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type BannerAggregator = {
  __typename?: 'BannerAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type BannerConnection = {
  __typename?: 'BannerConnection'
  values?: Maybe<Array<Maybe<Banner>>>
  groupBy?: Maybe<BannerGroupBy>
  aggregate?: Maybe<BannerAggregator>
}

export type BannerConnectionAdcampaign = {
  __typename?: 'BannerConnectionAdcampaign'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<BannerConnection>
}

export type BannerConnectionAdlocation = {
  __typename?: 'BannerConnectionAdlocation'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<BannerConnection>
}

export type BannerConnectionAdvertiser = {
  __typename?: 'BannerConnectionAdvertiser'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<BannerConnection>
}

export type BannerConnectionCreated_At = {
  __typename?: 'BannerConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<BannerConnection>
}

export type BannerConnectionCreated_By = {
  __typename?: 'BannerConnectionCreated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<BannerConnection>
}

export type BannerConnectionExpiry = {
  __typename?: 'BannerConnectionExpiry'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<BannerConnection>
}

export type BannerConnectionId = {
  __typename?: 'BannerConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<BannerConnection>
}

export type BannerConnectionNotes = {
  __typename?: 'BannerConnectionNotes'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<BannerConnection>
}

export type BannerConnectionSize = {
  __typename?: 'BannerConnectionSize'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<BannerConnection>
}

export type BannerConnectionTitle = {
  __typename?: 'BannerConnectionTitle'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<BannerConnection>
}

export type BannerConnectionUpdated_At = {
  __typename?: 'BannerConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<BannerConnection>
}

export type BannerConnectionUpdated_By = {
  __typename?: 'BannerConnectionUpdated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<BannerConnection>
}

export type BannerConnectionUrl = {
  __typename?: 'BannerConnectionUrl'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<BannerConnection>
}

export type BannerGroupBy = {
  __typename?: 'BannerGroupBy'
  id?: Maybe<Array<Maybe<BannerConnectionId>>>
  created_at?: Maybe<Array<Maybe<BannerConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<BannerConnectionUpdated_At>>>
  title?: Maybe<Array<Maybe<BannerConnectionTitle>>>
  url?: Maybe<Array<Maybe<BannerConnectionUrl>>>
  advertiser?: Maybe<Array<Maybe<BannerConnectionAdvertiser>>>
  expiry?: Maybe<Array<Maybe<BannerConnectionExpiry>>>
  size?: Maybe<Array<Maybe<BannerConnectionSize>>>
  adcampaign?: Maybe<Array<Maybe<BannerConnectionAdcampaign>>>
  adlocation?: Maybe<Array<Maybe<BannerConnectionAdlocation>>>
  notes?: Maybe<Array<Maybe<BannerConnectionNotes>>>
  created_by?: Maybe<Array<Maybe<BannerConnectionCreated_By>>>
  updated_by?: Maybe<Array<Maybe<BannerConnectionUpdated_By>>>
}

export type BannerInput = {
  title?: Maybe<Scalars['String']>
  image?: Maybe<Array<Maybe<Scalars['ID']>>>
  url?: Maybe<Scalars['String']>
  advertiser?: Maybe<Scalars['ID']>
  expiry?: Maybe<Scalars['Date']>
  size?: Maybe<Enum_Banner_Size>
  screens?: Maybe<Array<Maybe<Scalars['ID']>>>
  adcampaign?: Maybe<Scalars['ID']>
  adlocation?: Maybe<Scalars['ID']>
  notes?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type Blog = {
  __typename?: 'Blog'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  title?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  data?: Maybe<Scalars['JSON']>
  seo?: Maybe<ComponentDataSeo>
  hero?: Maybe<ComponentDataHero>
  comments?: Maybe<Array<Maybe<ComponentUserContentComments>>>
  links?: Maybe<Array<Maybe<ComponentDataLink>>>
  slug?: Maybe<Scalars['String']>
  published?: Maybe<Scalars['Boolean']>
  excerpt?: Maybe<Scalars['String']>
  author?: Maybe<Author>
  created_by?: Maybe<AdminUser>
  updated_by?: Maybe<AdminUser>
  image?: Maybe<Array<Maybe<UploadFile>>>
  adlocations?: Maybe<Array<Maybe<Adlocation>>>
  taxonomies?: Maybe<Array<Maybe<Taxonomy>>>
}

export type BlogImageArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type BlogAdlocationsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type BlogTaxonomiesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type BlogAggregator = {
  __typename?: 'BlogAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type BlogConnection = {
  __typename?: 'BlogConnection'
  values?: Maybe<Array<Maybe<Blog>>>
  groupBy?: Maybe<BlogGroupBy>
  aggregate?: Maybe<BlogAggregator>
}

export type BlogConnectionAuthor = {
  __typename?: 'BlogConnectionAuthor'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<BlogConnection>
}

export type BlogConnectionContent = {
  __typename?: 'BlogConnectionContent'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<BlogConnection>
}

export type BlogConnectionCreated_At = {
  __typename?: 'BlogConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<BlogConnection>
}

export type BlogConnectionCreated_By = {
  __typename?: 'BlogConnectionCreated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<BlogConnection>
}

export type BlogConnectionData = {
  __typename?: 'BlogConnectionData'
  key?: Maybe<Scalars['JSON']>
  connection?: Maybe<BlogConnection>
}

export type BlogConnectionExcerpt = {
  __typename?: 'BlogConnectionExcerpt'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<BlogConnection>
}

export type BlogConnectionHero = {
  __typename?: 'BlogConnectionHero'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<BlogConnection>
}

export type BlogConnectionId = {
  __typename?: 'BlogConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<BlogConnection>
}

export type BlogConnectionPublished = {
  __typename?: 'BlogConnectionPublished'
  key?: Maybe<Scalars['Boolean']>
  connection?: Maybe<BlogConnection>
}

export type BlogConnectionSeo = {
  __typename?: 'BlogConnectionSeo'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<BlogConnection>
}

export type BlogConnectionSlug = {
  __typename?: 'BlogConnectionSlug'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<BlogConnection>
}

export type BlogConnectionTitle = {
  __typename?: 'BlogConnectionTitle'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<BlogConnection>
}

export type BlogConnectionUpdated_At = {
  __typename?: 'BlogConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<BlogConnection>
}

export type BlogConnectionUpdated_By = {
  __typename?: 'BlogConnectionUpdated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<BlogConnection>
}

export type BlogGroupBy = {
  __typename?: 'BlogGroupBy'
  id?: Maybe<Array<Maybe<BlogConnectionId>>>
  created_at?: Maybe<Array<Maybe<BlogConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<BlogConnectionUpdated_At>>>
  title?: Maybe<Array<Maybe<BlogConnectionTitle>>>
  content?: Maybe<Array<Maybe<BlogConnectionContent>>>
  data?: Maybe<Array<Maybe<BlogConnectionData>>>
  seo?: Maybe<Array<Maybe<BlogConnectionSeo>>>
  hero?: Maybe<Array<Maybe<BlogConnectionHero>>>
  slug?: Maybe<Array<Maybe<BlogConnectionSlug>>>
  published?: Maybe<Array<Maybe<BlogConnectionPublished>>>
  excerpt?: Maybe<Array<Maybe<BlogConnectionExcerpt>>>
  author?: Maybe<Array<Maybe<BlogConnectionAuthor>>>
  created_by?: Maybe<Array<Maybe<BlogConnectionCreated_By>>>
  updated_by?: Maybe<Array<Maybe<BlogConnectionUpdated_By>>>
}

export type BlogInput = {
  title?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  image?: Maybe<Array<Maybe<Scalars['ID']>>>
  data?: Maybe<Scalars['JSON']>
  adlocations?: Maybe<Array<Maybe<Scalars['ID']>>>
  seo?: Maybe<ComponentDataSeoInput>
  hero?: Maybe<ComponentDataHeroInput>
  comments?: Maybe<Array<Maybe<ComponentUserContentCommentInput>>>
  links?: Maybe<Array<Maybe<ComponentDataLinkInput>>>
  slug?: Maybe<Scalars['String']>
  published?: Maybe<Scalars['Boolean']>
  excerpt?: Maybe<Scalars['String']>
  taxonomies?: Maybe<Array<Maybe<Scalars['ID']>>>
  author?: Maybe<Scalars['ID']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Client = {
  __typename?: 'Client'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  name?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  logo?: Maybe<UploadFile>
  services?: Maybe<Scalars['String']>
  website?: Maybe<Scalars['String']>
  sector?: Maybe<Enum_Client_Sector>
  created_by?: Maybe<AdminUser>
  updated_by?: Maybe<AdminUser>
  images?: Maybe<Array<Maybe<UploadFile>>>
}

export type ClientImagesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type ClientAggregator = {
  __typename?: 'ClientAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type ClientConnection = {
  __typename?: 'ClientConnection'
  values?: Maybe<Array<Maybe<Client>>>
  groupBy?: Maybe<ClientGroupBy>
  aggregate?: Maybe<ClientAggregator>
}

export type ClientConnectionCreated_At = {
  __typename?: 'ClientConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<ClientConnection>
}

export type ClientConnectionCreated_By = {
  __typename?: 'ClientConnectionCreated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ClientConnection>
}

export type ClientConnectionDescription = {
  __typename?: 'ClientConnectionDescription'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ClientConnection>
}

export type ClientConnectionId = {
  __typename?: 'ClientConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ClientConnection>
}

export type ClientConnectionLocation = {
  __typename?: 'ClientConnectionLocation'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ClientConnection>
}

export type ClientConnectionLogo = {
  __typename?: 'ClientConnectionLogo'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ClientConnection>
}

export type ClientConnectionName = {
  __typename?: 'ClientConnectionName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ClientConnection>
}

export type ClientConnectionSector = {
  __typename?: 'ClientConnectionSector'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ClientConnection>
}

export type ClientConnectionServices = {
  __typename?: 'ClientConnectionServices'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ClientConnection>
}

export type ClientConnectionSlug = {
  __typename?: 'ClientConnectionSlug'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ClientConnection>
}

export type ClientConnectionUpdated_At = {
  __typename?: 'ClientConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<ClientConnection>
}

export type ClientConnectionUpdated_By = {
  __typename?: 'ClientConnectionUpdated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ClientConnection>
}

export type ClientConnectionWebsite = {
  __typename?: 'ClientConnectionWebsite'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ClientConnection>
}

export type ClientGroupBy = {
  __typename?: 'ClientGroupBy'
  id?: Maybe<Array<Maybe<ClientConnectionId>>>
  created_at?: Maybe<Array<Maybe<ClientConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<ClientConnectionUpdated_At>>>
  name?: Maybe<Array<Maybe<ClientConnectionName>>>
  location?: Maybe<Array<Maybe<ClientConnectionLocation>>>
  slug?: Maybe<Array<Maybe<ClientConnectionSlug>>>
  description?: Maybe<Array<Maybe<ClientConnectionDescription>>>
  logo?: Maybe<Array<Maybe<ClientConnectionLogo>>>
  services?: Maybe<Array<Maybe<ClientConnectionServices>>>
  website?: Maybe<Array<Maybe<ClientConnectionWebsite>>>
  sector?: Maybe<Array<Maybe<ClientConnectionSector>>>
  created_by?: Maybe<Array<Maybe<ClientConnectionCreated_By>>>
  updated_by?: Maybe<Array<Maybe<ClientConnectionUpdated_By>>>
}

export type ClientInput = {
  name?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  logo?: Maybe<Scalars['ID']>
  services?: Maybe<Scalars['String']>
  website?: Maybe<Scalars['String']>
  sector?: Maybe<Enum_Client_Sector>
  images?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type ComponentDataClient = {
  __typename?: 'ComponentDataClient'
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  logo?: Maybe<UploadFile>
  services?: Maybe<Scalars['String']>
  website?: Maybe<Scalars['String']>
  sector?: Maybe<Enum_Componentdataclient_Sector>
  slug?: Maybe<Scalars['String']>
  images?: Maybe<Array<Maybe<UploadFile>>>
}

export type ComponentDataClientImagesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type ComponentDataClientInput = {
  name?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  logo?: Maybe<Scalars['ID']>
  services?: Maybe<Scalars['String']>
  website?: Maybe<Scalars['String']>
  sector?: Maybe<Enum_Componentdataclient_Sector>
  images?: Maybe<Array<Maybe<Scalars['ID']>>>
  slug?: Maybe<Scalars['String']>
}

export type ComponentDataContact = {
  __typename?: 'ComponentDataContact'
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  media?: Maybe<UploadFile>
  published?: Maybe<Scalars['Boolean']>
}

export type ComponentDataContactInput = {
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  media?: Maybe<Scalars['ID']>
  published?: Maybe<Scalars['Boolean']>
}

export type ComponentDataData = {
  __typename?: 'ComponentDataData'
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  meta?: Maybe<Scalars['JSON']>
  media?: Maybe<UploadFile>
  published?: Maybe<Scalars['Boolean']>
  value?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
}

export type ComponentDataDatumInput = {
  name?: Maybe<Scalars['String']>
  meta?: Maybe<Scalars['JSON']>
  media?: Maybe<Scalars['ID']>
  published?: Maybe<Scalars['Boolean']>
  value?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
}

export type ComponentDataEducation = {
  __typename?: 'ComponentDataEducation'
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  startDate?: Maybe<Scalars['Date']>
  endDate?: Maybe<Scalars['Date']>
  notes?: Maybe<Scalars['String']>
}

export type ComponentDataEducationInput = {
  name?: Maybe<Scalars['String']>
  startDate?: Maybe<Scalars['Date']>
  endDate?: Maybe<Scalars['Date']>
  notes?: Maybe<Scalars['String']>
}

export type ComponentDataFaq = {
  __typename?: 'ComponentDataFaq'
  id: Scalars['ID']
  question?: Maybe<Scalars['String']>
  answer?: Maybe<Scalars['String']>
  published?: Maybe<Scalars['Boolean']>
}

export type ComponentDataFaqInput = {
  question?: Maybe<Scalars['String']>
  answer?: Maybe<Scalars['String']>
  published?: Maybe<Scalars['Boolean']>
}

export type ComponentDataHero = {
  __typename?: 'ComponentDataHero'
  id?: Scalars['ID']
  content?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  meta?: Maybe<Scalars['JSON']>
  ctaText?: Maybe<Scalars['String']>
  media?: Maybe<Array<Maybe<UploadFile>>>
}

export type ComponentDataHeroMediaArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type ComponentDataHeroInput = {
  content?: Maybe<Scalars['String']>
  media?: Maybe<Array<Maybe<Scalars['ID']>>>
  url?: Maybe<Scalars['String']>
  meta?: Maybe<Scalars['JSON']>
  ctaText?: Maybe<Scalars['String']>
}

export type ComponentDataLink = {
  __typename?: 'ComponentDataLink'
  id: Scalars['ID']
  label?: Maybe<Scalars['String']>
  href?: Maybe<Scalars['String']>
  published?: Maybe<Scalars['Boolean']>
}

export type ComponentDataLinkgroup = {
  __typename?: 'ComponentDataLinkgroup'
  id: Scalars['ID']
  title?: Maybe<Scalars['String']>
  links?: Maybe<Array<Maybe<ComponentDataLink>>>
}

export type ComponentDataLinkgroupInput = {
  title?: Maybe<Scalars['String']>
  links?: Maybe<Array<Maybe<ComponentDataLinkInput>>>
}

export type ComponentDataLinkInput = {
  label?: Maybe<Scalars['String']>
  href?: Maybe<Scalars['String']>
  published?: Maybe<Scalars['Boolean']>
}

export type ComponentDataProfile = {
  __typename?: 'ComponentDataProfile'
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  dateOfBirth?: Maybe<Scalars['Date']>
  surname?: Maybe<Scalars['String']>
  wantsMarketing?: Maybe<Scalars['Boolean']>
  avatar?: Maybe<UploadFile>
  city?: Maybe<Scalars['String']>
  telephone?: Maybe<Scalars['String']>
  network?: Maybe<Scalars['String']>
}

export type ComponentDataProfileInput = {
  name?: Maybe<Scalars['String']>
  dateOfBirth?: Maybe<Scalars['Date']>
  surname?: Maybe<Scalars['String']>
  wantsMarketing?: Maybe<Scalars['Boolean']>
  avatar?: Maybe<Scalars['ID']>
  city?: Maybe<Scalars['String']>
  telephone?: Maybe<Scalars['String']>
  network?: Maybe<Scalars['String']>
}

export type ComponentDataSeo = {
  __typename?: 'ComponentDataSeo'
  id: Scalars['ID']
  title?: Maybe<Scalars['String']>
  image?: Maybe<UploadFile>
  type?: Maybe<Enum_Componentdataseo_Type>
  description?: Maybe<Scalars['String']>
  locale?: Maybe<Enum_Componentdataseo_Locale>
}

export type ComponentDataSeoInput = {
  title?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['ID']>
  type?: Maybe<Enum_Componentdataseo_Type>
  description?: Maybe<Scalars['String']>
  locale?: Maybe<Enum_Componentdataseo_Locale>
}

export type ComponentDataService = {
  __typename?: 'ComponentDataService'
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  image?: Maybe<UploadFile>
  website?: Maybe<Scalars['String']>
}

export type ComponentDataServiceInput = {
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['ID']>
  website?: Maybe<Scalars['String']>
}

export type ComponentUserContentCommentInput = {
  user?: Maybe<Scalars['ID']>
  message?: Maybe<Scalars['String']>
  likes?: Maybe<Scalars['Int']>
}

export type ComponentUserContentComments = {
  __typename?: 'ComponentUserContentComments'
  id: Scalars['ID']
  user?: Maybe<UsersPermissionsUser>
  message?: Maybe<Scalars['String']>
  likes?: Maybe<Scalars['Int']>
}

export type Config = {
  __typename?: 'Config'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  name?: Maybe<Scalars['String']>
  website?: Maybe<Scalars['String']>
  emailAddress?: Maybe<Scalars['String']>
  created_by?: Maybe<AdminUser>
  updated_by?: Maybe<AdminUser>
}

export type ConfigInput = {
  name?: Maybe<Scalars['String']>
  website?: Maybe<Scalars['String']>
  emailAddress?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type Content = {
  __typename?: 'Content'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  name?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  media?: Maybe<UploadFile>
  meta?: Maybe<Scalars['JSON']>
  ctaLink?: Maybe<Scalars['String']>
  ctaText?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  data?: Maybe<Array<Maybe<ContentDataDynamicZone>>>
  links?: Maybe<Array<Maybe<ComponentDataLinkgroup>>>
  screen?: Maybe<Screen>
  created_by?: Maybe<AdminUser>
  updated_by?: Maybe<AdminUser>
}

export type ContentAggregator = {
  __typename?: 'ContentAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type ContentConnection = {
  __typename?: 'ContentConnection'
  values?: Maybe<Array<Maybe<Content>>>
  groupBy?: Maybe<ContentGroupBy>
  aggregate?: Maybe<ContentAggregator>
}

export type ContentConnectionContent = {
  __typename?: 'ContentConnectionContent'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ContentConnection>
}

export type ContentConnectionCreated_At = {
  __typename?: 'ContentConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<ContentConnection>
}

export type ContentConnectionCreated_By = {
  __typename?: 'ContentConnectionCreated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ContentConnection>
}

export type ContentConnectionCtaLink = {
  __typename?: 'ContentConnectionCtaLink'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ContentConnection>
}

export type ContentConnectionCtaText = {
  __typename?: 'ContentConnectionCtaText'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ContentConnection>
}

export type ContentConnectionId = {
  __typename?: 'ContentConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ContentConnection>
}

export type ContentConnectionMedia = {
  __typename?: 'ContentConnectionMedia'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ContentConnection>
}

export type ContentConnectionMeta = {
  __typename?: 'ContentConnectionMeta'
  key?: Maybe<Scalars['JSON']>
  connection?: Maybe<ContentConnection>
}

export type ContentConnectionName = {
  __typename?: 'ContentConnectionName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ContentConnection>
}

export type ContentConnectionScreen = {
  __typename?: 'ContentConnectionScreen'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ContentConnection>
}

export type ContentConnectionSlug = {
  __typename?: 'ContentConnectionSlug'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ContentConnection>
}

export type ContentConnectionUpdated_At = {
  __typename?: 'ContentConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<ContentConnection>
}

export type ContentConnectionUpdated_By = {
  __typename?: 'ContentConnectionUpdated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ContentConnection>
}

export type ContentDataDynamicZone = ComponentDataLink | ComponentDataClient

export type ContentGroupBy = {
  __typename?: 'ContentGroupBy'
  id?: Maybe<Array<Maybe<ContentConnectionId>>>
  created_at?: Maybe<Array<Maybe<ContentConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<ContentConnectionUpdated_At>>>
  name?: Maybe<Array<Maybe<ContentConnectionName>>>
  content?: Maybe<Array<Maybe<ContentConnectionContent>>>
  media?: Maybe<Array<Maybe<ContentConnectionMedia>>>
  meta?: Maybe<Array<Maybe<ContentConnectionMeta>>>
  ctaLink?: Maybe<Array<Maybe<ContentConnectionCtaLink>>>
  ctaText?: Maybe<Array<Maybe<ContentConnectionCtaText>>>
  slug?: Maybe<Array<Maybe<ContentConnectionSlug>>>
  screen?: Maybe<Array<Maybe<ContentConnectionScreen>>>
  created_by?: Maybe<Array<Maybe<ContentConnectionCreated_By>>>
  updated_by?: Maybe<Array<Maybe<ContentConnectionUpdated_By>>>
}

export type ContentInput = {
  name?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  media?: Maybe<Scalars['ID']>
  meta?: Maybe<Scalars['JSON']>
  ctaLink?: Maybe<Scalars['String']>
  ctaText?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  data?: Maybe<Array<Scalars['ContentDataDynamicZoneInput']>>
  links?: Maybe<Array<Maybe<ComponentDataLinkgroupInput>>>
  screen?: Maybe<Scalars['ID']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type CreateAdcampaignInput = {
  data?: Maybe<AdcampaignInput>
}

export type CreateAdcampaignPayload = {
  __typename?: 'createAdcampaignPayload'
  adcampaign?: Maybe<Adcampaign>
}

export type CreateAdlocationInput = {
  data?: Maybe<AdlocationInput>
}

export type CreateAdlocationPayload = {
  __typename?: 'createAdlocationPayload'
  adlocation?: Maybe<Adlocation>
}

export type CreateAdvertiserInput = {
  data?: Maybe<AdvertiserInput>
}

export type CreateAdvertiserPayload = {
  __typename?: 'createAdvertiserPayload'
  advertiser?: Maybe<Advertiser>
}

export type CreateAuthorInput = {
  data?: Maybe<AuthorInput>
}

export type CreateAuthorPayload = {
  __typename?: 'createAuthorPayload'
  author?: Maybe<Author>
}

export type CreateBannerInput = {
  data?: Maybe<BannerInput>
}

export type CreateBannerPayload = {
  __typename?: 'createBannerPayload'
  banner?: Maybe<Banner>
}

export type CreateBlogInput = {
  data?: Maybe<BlogInput>
}

export type CreateBlogPayload = {
  __typename?: 'createBlogPayload'
  blog?: Maybe<Blog>
}

export type CreateClientInput = {
  data?: Maybe<ClientInput>
}

export type CreateClientPayload = {
  __typename?: 'createClientPayload'
  client?: Maybe<Client>
}

export type CreateContentInput = {
  data?: Maybe<ContentInput>
}

export type CreateContentPayload = {
  __typename?: 'createContentPayload'
  content?: Maybe<Content>
}

export type CreateEventInput = {
  data?: Maybe<EventInput>
}

export type CreateEventPayload = {
  __typename?: 'createEventPayload'
  event?: Maybe<Event>
}

export type CreateProgrammeInput = {
  data?: Maybe<ProgrammeInput>
}

export type CreateProgrammePayload = {
  __typename?: 'createProgrammePayload'
  programme?: Maybe<Programme>
}

export type CreateReferralInput = {
  data?: Maybe<ReferralInput>
}

export type CreateReferralPayload = {
  __typename?: 'createReferralPayload'
  referral?: Maybe<Referral>
}

export type CreateRoleInput = {
  data?: Maybe<RoleInput>
}

export type CreateRolePayload = {
  __typename?: 'createRolePayload'
  role?: Maybe<UsersPermissionsRole>
}

export type CreateScreenInput = {
  data?: Maybe<ScreenInput>
}

export type CreateScreenPayload = {
  __typename?: 'createScreenPayload'
  screen?: Maybe<Screen>
}

export type CreateTaxonomyInput = {
  data?: Maybe<TaxonomyInput>
}

export type CreateTaxonomyPayload = {
  __typename?: 'createTaxonomyPayload'
  taxonomy?: Maybe<Taxonomy>
}

export type CreateUserInput = {
  data?: Maybe<UserInput>
}

export type CreateUserPayload = {
  __typename?: 'createUserPayload'
  user?: Maybe<UsersPermissionsUser>
}

export type DeleteAdcampaignInput = {
  where?: Maybe<InputId>
}

export type DeleteAdcampaignPayload = {
  __typename?: 'deleteAdcampaignPayload'
  adcampaign?: Maybe<Adcampaign>
}

export type DeleteAdlocationInput = {
  where?: Maybe<InputId>
}

export type DeleteAdlocationPayload = {
  __typename?: 'deleteAdlocationPayload'
  adlocation?: Maybe<Adlocation>
}

export type DeleteAdvertiserInput = {
  where?: Maybe<InputId>
}

export type DeleteAdvertiserPayload = {
  __typename?: 'deleteAdvertiserPayload'
  advertiser?: Maybe<Advertiser>
}

export type DeleteAuthorInput = {
  where?: Maybe<InputId>
}

export type DeleteAuthorPayload = {
  __typename?: 'deleteAuthorPayload'
  author?: Maybe<Author>
}

export type DeleteBannerInput = {
  where?: Maybe<InputId>
}

export type DeleteBannerPayload = {
  __typename?: 'deleteBannerPayload'
  banner?: Maybe<Banner>
}

export type DeleteBlogInput = {
  where?: Maybe<InputId>
}

export type DeleteBlogPayload = {
  __typename?: 'deleteBlogPayload'
  blog?: Maybe<Blog>
}

export type DeleteClientInput = {
  where?: Maybe<InputId>
}

export type DeleteClientPayload = {
  __typename?: 'deleteClientPayload'
  client?: Maybe<Client>
}

export type DeleteConfigPayload = {
  __typename?: 'deleteConfigPayload'
  config?: Maybe<Config>
}

export type DeleteContentInput = {
  where?: Maybe<InputId>
}

export type DeleteContentPayload = {
  __typename?: 'deleteContentPayload'
  content?: Maybe<Content>
}

export type DeleteEventInput = {
  where?: Maybe<InputId>
}

export type DeleteEventPayload = {
  __typename?: 'deleteEventPayload'
  event?: Maybe<Event>
}

export type DeleteProgrammeInput = {
  where?: Maybe<InputId>
}

export type DeleteProgrammePayload = {
  __typename?: 'deleteProgrammePayload'
  programme?: Maybe<Programme>
}

export type DeleteReferralInput = {
  where?: Maybe<InputId>
}

export type DeleteReferralPayload = {
  __typename?: 'deleteReferralPayload'
  referral?: Maybe<Referral>
}

export type DeleteRoleInput = {
  where?: Maybe<InputId>
}

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload'
  role?: Maybe<UsersPermissionsRole>
}

export type DeleteScreenInput = {
  where?: Maybe<InputId>
}

export type DeleteScreenPayload = {
  __typename?: 'deleteScreenPayload'
  screen?: Maybe<Screen>
}

export type DeleteTaxonomyInput = {
  where?: Maybe<InputId>
}

export type DeleteTaxonomyPayload = {
  __typename?: 'deleteTaxonomyPayload'
  taxonomy?: Maybe<Taxonomy>
}

export type DeleteUserInput = {
  where?: Maybe<InputId>
}

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload'
  user?: Maybe<UsersPermissionsUser>
}

export type EditAdcampaignInput = {
  advertiser?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  expiry?: Maybe<Scalars['Date']>
  active?: Maybe<Scalars['Boolean']>
  banners?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditAdlocationInput = {
  slug?: Maybe<Scalars['String']>
  position?: Maybe<Enum_Adlocation_Position>
  banners?: Maybe<Array<Maybe<Scalars['ID']>>>
  screen?: Maybe<Scalars['ID']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditAdvertiserInput = {
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  company?: Maybe<Scalars['String']>
  campaign?: Maybe<Enum_Advertiser_Campaign>
  media?: Maybe<Array<Maybe<Scalars['ID']>>>
  adcampaigns?: Maybe<Array<Maybe<Scalars['ID']>>>
  banners?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditAuthorInput = {
  blogs?: Maybe<Array<Maybe<Scalars['ID']>>>
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  avatar?: Maybe<Scalars['ID']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditBannerInput = {
  title?: Maybe<Scalars['String']>
  image?: Maybe<Array<Maybe<Scalars['ID']>>>
  url?: Maybe<Scalars['String']>
  advertiser?: Maybe<Scalars['ID']>
  expiry?: Maybe<Scalars['Date']>
  size?: Maybe<Enum_Banner_Size>
  screens?: Maybe<Array<Maybe<Scalars['ID']>>>
  adcampaign?: Maybe<Scalars['ID']>
  adlocation?: Maybe<Scalars['ID']>
  notes?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditBlogInput = {
  title?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  image?: Maybe<Array<Maybe<Scalars['ID']>>>
  data?: Maybe<Scalars['JSON']>
  adlocations?: Maybe<Array<Maybe<Scalars['ID']>>>
  seo?: Maybe<EditComponentDataSeoInput>
  hero?: Maybe<EditComponentDataHeroInput>
  comments?: Maybe<Array<Maybe<EditComponentUserContentCommentInput>>>
  links?: Maybe<Array<Maybe<EditComponentDataLinkInput>>>
  slug?: Maybe<Scalars['String']>
  published?: Maybe<Scalars['Boolean']>
  excerpt?: Maybe<Scalars['String']>
  taxonomies?: Maybe<Array<Maybe<Scalars['ID']>>>
  author?: Maybe<Scalars['ID']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditClientInput = {
  name?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  logo?: Maybe<Scalars['ID']>
  services?: Maybe<Scalars['String']>
  website?: Maybe<Scalars['String']>
  sector?: Maybe<Enum_Client_Sector>
  images?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditComponentDataClientInput = {
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  logo?: Maybe<Scalars['ID']>
  services?: Maybe<Scalars['String']>
  website?: Maybe<Scalars['String']>
  sector?: Maybe<Enum_Componentdataclient_Sector>
  images?: Maybe<Array<Maybe<Scalars['ID']>>>
  slug?: Maybe<Scalars['String']>
}

export type EditComponentDataContactInput = {
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  media?: Maybe<Scalars['ID']>
  published?: Maybe<Scalars['Boolean']>
}

export type EditComponentDataDatumInput = {
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  meta?: Maybe<Scalars['JSON']>
  media?: Maybe<Scalars['ID']>
  published?: Maybe<Scalars['Boolean']>
  value?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
}

export type EditComponentDataEducationInput = {
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  startDate?: Maybe<Scalars['Date']>
  endDate?: Maybe<Scalars['Date']>
  notes?: Maybe<Scalars['String']>
}

export type EditComponentDataFaqInput = {
  id?: Maybe<Scalars['ID']>
  question?: Maybe<Scalars['String']>
  answer?: Maybe<Scalars['String']>
  published?: Maybe<Scalars['Boolean']>
}

export type EditComponentDataHeroInput = {
  id?: Maybe<Scalars['ID']>
  content?: Maybe<Scalars['String']>
  media?: Maybe<Array<Maybe<Scalars['ID']>>>
  url?: Maybe<Scalars['String']>
  meta?: Maybe<Scalars['JSON']>
  ctaText?: Maybe<Scalars['String']>
}

export type EditComponentDataLinkgroupInput = {
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  links?: Maybe<Array<Maybe<EditComponentDataLinkInput>>>
}

export type EditComponentDataLinkInput = {
  id?: Maybe<Scalars['ID']>
  label?: Maybe<Scalars['String']>
  href?: Maybe<Scalars['String']>
  published?: Maybe<Scalars['Boolean']>
}

export type EditComponentDataProfileInput = {
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  dateOfBirth?: Maybe<Scalars['Date']>
  surname?: Maybe<Scalars['String']>
  wantsMarketing?: Maybe<Scalars['Boolean']>
  avatar?: Maybe<Scalars['ID']>
  city?: Maybe<Scalars['String']>
  telephone?: Maybe<Scalars['String']>
  network?: Maybe<Scalars['String']>
}

export type EditComponentDataSeoInput = {
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['ID']>
  type?: Maybe<Enum_Componentdataseo_Type>
  description?: Maybe<Scalars['String']>
  locale?: Maybe<Enum_Componentdataseo_Locale>
}

export type EditComponentDataServiceInput = {
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['ID']>
  website?: Maybe<Scalars['String']>
}

export type EditComponentUserContentCommentInput = {
  id?: Maybe<Scalars['ID']>
  user?: Maybe<Scalars['ID']>
  message?: Maybe<Scalars['String']>
  likes?: Maybe<Scalars['Int']>
}

export type EditConfigInput = {
  name?: Maybe<Scalars['String']>
  website?: Maybe<Scalars['String']>
  emailAddress?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditContentInput = {
  name?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  media?: Maybe<Scalars['ID']>
  meta?: Maybe<Scalars['JSON']>
  ctaLink?: Maybe<Scalars['String']>
  ctaText?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  data?: Maybe<Array<Scalars['ContentDataDynamicZoneInput']>>
  links?: Maybe<Array<Maybe<EditComponentDataLinkgroupInput>>>
  screen?: Maybe<Scalars['ID']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditEventInput = {
  name?: Maybe<Scalars['String']>
  date?: Maybe<Scalars['DateTime']>
  venue?: Maybe<Scalars['String']>
  Address?: Maybe<Scalars['String']>
  website?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditFileInput = {
  name?: Maybe<Scalars['String']>
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  formats?: Maybe<Scalars['JSON']>
  hash?: Maybe<Scalars['String']>
  ext?: Maybe<Scalars['String']>
  mime?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  url?: Maybe<Scalars['String']>
  previewUrl?: Maybe<Scalars['String']>
  provider?: Maybe<Scalars['String']>
  provider_metadata?: Maybe<Scalars['JSON']>
  related?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditProgrammeInput = {
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['ID']>
  gallery?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditReferralInput = {
  name?: Maybe<Scalars['String']>
  dateOfBirth?: Maybe<Scalars['DateTime']>
  niNumber?: Maybe<Scalars['String']>
  education?: Maybe<Array<Maybe<EditComponentDataEducationInput>>>
  programmes?: Maybe<Scalars['String']>
  referrer?: Maybe<EditComponentDataContactInput>
  description?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>
  users?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditScreenInput = {
  title?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  published?: Maybe<Scalars['Boolean']>
  banners?: Maybe<Array<Maybe<Scalars['ID']>>>
  adlocations?: Maybe<Array<Maybe<Scalars['ID']>>>
  meta?: Maybe<Scalars['JSON']>
  hero?: Maybe<EditComponentDataHeroInput>
  faqs?: Maybe<Array<Maybe<EditComponentDataFaqInput>>>
  data?: Maybe<Array<Scalars['ScreenDataDynamicZoneInput']>>
  seo?: Maybe<EditComponentDataSeoInput>
  links?: Maybe<Array<Maybe<EditComponentDataLinkgroupInput>>>
  contents?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditTaxonomyInput = {
  name?: Maybe<Scalars['String']>
  type?: Maybe<Enum_Taxonomy_Type>
  slug?: Maybe<Scalars['String']>
  blogs?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditUserInput = {
  username?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  provider?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  resetPasswordToken?: Maybe<Scalars['String']>
  confirmed?: Maybe<Scalars['Boolean']>
  blocked?: Maybe<Scalars['Boolean']>
  role?: Maybe<Scalars['ID']>
  referral?: Maybe<Scalars['ID']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export enum Enum_Adlocation_Position {
  Header = 'header',
  Background = 'background',
  Side = 'side',
  Footer = 'footer',
  Game = 'game',
  Post = 'post'
}

export enum Enum_Advertiser_Campaign {
  Banners = 'banners',
  Hijack = 'hijack',
  Adhoc = 'adhoc'
}

export enum Enum_Banner_Size {
  MediumRectangle = 'medium_rectangle',
  SquarePopUp = 'square_pop_up',
  VerticalRectangle = 'vertical_rectangle',
  LargeRectangle = 'large_rectangle',
  Rectangle = 'rectangle',
  ThreeToOneRectangle = 'three_to_one_rectangle',
  PopUnder = 'pop_under',
  FullBanner = 'full_banner',
  HalfBanner = 'half_banner',
  MicroBar = 'micro_bar',
  Button_1 = 'button_1',
  Button_2 = 'button_2',
  VerticalBanner = 'vertical_banner',
  SquareButton = 'square_button',
  Leaderboard = 'leaderboard',
  WideSkyscraper = 'wide_skyscraper',
  Skyscraper = 'skyscraper',
  HalfPageAd = 'half_page_ad'
}

export enum Enum_Client_Sector {
  Sports = 'sports',
  Development = 'development',
  Tech = 'tech',
  Csr = 'CSR'
}

export enum Enum_Componentdataclient_Sector {
  Development = 'development',
  Sports = 'sports',
  Tech = 'tech',
  Csr = 'CSR'
}

export enum Enum_Componentdataseo_Locale {
  EnUs = 'en_US',
  EnGb = 'en_GB',
  EnNg = 'en_NG'
}

export enum Enum_Componentdataseo_Type {
  Article = 'article',
  Website = 'website'
}

export enum Enum_Taxonomy_Type {
  Tag = 'tag',
  Category = 'category'
}

export type Event = {
  __typename?: 'Event'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  name?: Maybe<Scalars['String']>
  date?: Maybe<Scalars['DateTime']>
  venue?: Maybe<Scalars['String']>
  Address?: Maybe<Scalars['String']>
  website?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  created_by?: Maybe<AdminUser>
  updated_by?: Maybe<AdminUser>
}

export type EventAggregator = {
  __typename?: 'EventAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type EventConnection = {
  __typename?: 'EventConnection'
  values?: Maybe<Array<Maybe<Event>>>
  groupBy?: Maybe<EventGroupBy>
  aggregate?: Maybe<EventAggregator>
}

export type EventConnectionAddress = {
  __typename?: 'EventConnectionAddress'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<EventConnection>
}

export type EventConnectionCreated_At = {
  __typename?: 'EventConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<EventConnection>
}

export type EventConnectionCreated_By = {
  __typename?: 'EventConnectionCreated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<EventConnection>
}

export type EventConnectionDate = {
  __typename?: 'EventConnectionDate'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<EventConnection>
}

export type EventConnectionDescription = {
  __typename?: 'EventConnectionDescription'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<EventConnection>
}

export type EventConnectionId = {
  __typename?: 'EventConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<EventConnection>
}

export type EventConnectionName = {
  __typename?: 'EventConnectionName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<EventConnection>
}

export type EventConnectionSlug = {
  __typename?: 'EventConnectionSlug'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<EventConnection>
}

export type EventConnectionUpdated_At = {
  __typename?: 'EventConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<EventConnection>
}

export type EventConnectionUpdated_By = {
  __typename?: 'EventConnectionUpdated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<EventConnection>
}

export type EventConnectionVenue = {
  __typename?: 'EventConnectionVenue'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<EventConnection>
}

export type EventConnectionWebsite = {
  __typename?: 'EventConnectionWebsite'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<EventConnection>
}

export type EventGroupBy = {
  __typename?: 'EventGroupBy'
  id?: Maybe<Array<Maybe<EventConnectionId>>>
  created_at?: Maybe<Array<Maybe<EventConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<EventConnectionUpdated_At>>>
  name?: Maybe<Array<Maybe<EventConnectionName>>>
  date?: Maybe<Array<Maybe<EventConnectionDate>>>
  venue?: Maybe<Array<Maybe<EventConnectionVenue>>>
  Address?: Maybe<Array<Maybe<EventConnectionAddress>>>
  website?: Maybe<Array<Maybe<EventConnectionWebsite>>>
  description?: Maybe<Array<Maybe<EventConnectionDescription>>>
  slug?: Maybe<Array<Maybe<EventConnectionSlug>>>
  created_by?: Maybe<Array<Maybe<EventConnectionCreated_By>>>
  updated_by?: Maybe<Array<Maybe<EventConnectionUpdated_By>>>
}

export type EventInput = {
  name?: Maybe<Scalars['String']>
  date?: Maybe<Scalars['DateTime']>
  venue?: Maybe<Scalars['String']>
  Address?: Maybe<Scalars['String']>
  website?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type FileInput = {
  name: Scalars['String']
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  formats?: Maybe<Scalars['JSON']>
  hash: Scalars['String']
  ext?: Maybe<Scalars['String']>
  mime: Scalars['String']
  size: Scalars['Float']
  url: Scalars['String']
  previewUrl?: Maybe<Scalars['String']>
  provider: Scalars['String']
  provider_metadata?: Maybe<Scalars['JSON']>
  related?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type InputId = {
  id: Scalars['ID']
}

export type Morph =
  | UsersPermissionsMe
  | UsersPermissionsMeRole
  | UsersPermissionsLoginPayload
  | UserPermissionsPasswordPayload
  | Adcampaign
  | AdcampaignConnection
  | AdcampaignAggregator
  | AdcampaignGroupBy
  | AdcampaignConnectionId
  | AdcampaignConnectionCreated_At
  | AdcampaignConnectionUpdated_At
  | AdcampaignConnectionAdvertiser
  | AdcampaignConnectionName
  | AdcampaignConnectionExpiry
  | AdcampaignConnectionActive
  | AdcampaignConnectionCreated_By
  | AdcampaignConnectionUpdated_By
  | CreateAdcampaignPayload
  | UpdateAdcampaignPayload
  | DeleteAdcampaignPayload
  | Adlocation
  | AdlocationConnection
  | AdlocationAggregator
  | AdlocationGroupBy
  | AdlocationConnectionId
  | AdlocationConnectionCreated_At
  | AdlocationConnectionUpdated_At
  | AdlocationConnectionSlug
  | AdlocationConnectionPosition
  | AdlocationConnectionScreen
  | AdlocationConnectionCreated_By
  | AdlocationConnectionUpdated_By
  | CreateAdlocationPayload
  | UpdateAdlocationPayload
  | DeleteAdlocationPayload
  | Advertiser
  | AdvertiserConnection
  | AdvertiserAggregator
  | AdvertiserGroupBy
  | AdvertiserConnectionId
  | AdvertiserConnectionCreated_At
  | AdvertiserConnectionUpdated_At
  | AdvertiserConnectionName
  | AdvertiserConnectionEmail
  | AdvertiserConnectionCompany
  | AdvertiserConnectionCampaign
  | AdvertiserConnectionCreated_By
  | AdvertiserConnectionUpdated_By
  | CreateAdvertiserPayload
  | UpdateAdvertiserPayload
  | DeleteAdvertiserPayload
  | Author
  | AuthorConnection
  | AuthorAggregator
  | AuthorGroupBy
  | AuthorConnectionId
  | AuthorConnectionCreated_At
  | AuthorConnectionUpdated_At
  | AuthorConnectionName
  | AuthorConnectionEmail
  | AuthorConnectionBio
  | AuthorConnectionAvatar
  | AuthorConnectionCreated_By
  | AuthorConnectionUpdated_By
  | CreateAuthorPayload
  | UpdateAuthorPayload
  | DeleteAuthorPayload
  | Banner
  | BannerConnection
  | BannerAggregator
  | BannerGroupBy
  | BannerConnectionId
  | BannerConnectionCreated_At
  | BannerConnectionUpdated_At
  | BannerConnectionTitle
  | BannerConnectionUrl
  | BannerConnectionAdvertiser
  | BannerConnectionExpiry
  | BannerConnectionSize
  | BannerConnectionAdcampaign
  | BannerConnectionAdlocation
  | BannerConnectionNotes
  | BannerConnectionCreated_By
  | BannerConnectionUpdated_By
  | CreateBannerPayload
  | UpdateBannerPayload
  | DeleteBannerPayload
  | Blog
  | BlogConnection
  | BlogAggregator
  | BlogGroupBy
  | BlogConnectionId
  | BlogConnectionCreated_At
  | BlogConnectionUpdated_At
  | BlogConnectionTitle
  | BlogConnectionContent
  | BlogConnectionData
  | BlogConnectionSeo
  | BlogConnectionHero
  | BlogConnectionSlug
  | BlogConnectionPublished
  | BlogConnectionExcerpt
  | BlogConnectionAuthor
  | BlogConnectionCreated_By
  | BlogConnectionUpdated_By
  | CreateBlogPayload
  | UpdateBlogPayload
  | DeleteBlogPayload
  | Client
  | ClientConnection
  | ClientAggregator
  | ClientGroupBy
  | ClientConnectionId
  | ClientConnectionCreated_At
  | ClientConnectionUpdated_At
  | ClientConnectionName
  | ClientConnectionLocation
  | ClientConnectionSlug
  | ClientConnectionDescription
  | ClientConnectionLogo
  | ClientConnectionServices
  | ClientConnectionWebsite
  | ClientConnectionSector
  | ClientConnectionCreated_By
  | ClientConnectionUpdated_By
  | CreateClientPayload
  | UpdateClientPayload
  | DeleteClientPayload
  | Config
  | UpdateConfigPayload
  | DeleteConfigPayload
  | Content
  | ContentConnection
  | ContentAggregator
  | ContentGroupBy
  | ContentConnectionId
  | ContentConnectionCreated_At
  | ContentConnectionUpdated_At
  | ContentConnectionName
  | ContentConnectionContent
  | ContentConnectionMedia
  | ContentConnectionMeta
  | ContentConnectionCtaLink
  | ContentConnectionCtaText
  | ContentConnectionSlug
  | ContentConnectionScreen
  | ContentConnectionCreated_By
  | ContentConnectionUpdated_By
  | CreateContentPayload
  | UpdateContentPayload
  | DeleteContentPayload
  | Event
  | EventConnection
  | EventAggregator
  | EventGroupBy
  | EventConnectionId
  | EventConnectionCreated_At
  | EventConnectionUpdated_At
  | EventConnectionName
  | EventConnectionDate
  | EventConnectionVenue
  | EventConnectionAddress
  | EventConnectionWebsite
  | EventConnectionDescription
  | EventConnectionSlug
  | EventConnectionCreated_By
  | EventConnectionUpdated_By
  | CreateEventPayload
  | UpdateEventPayload
  | DeleteEventPayload
  | Programme
  | ProgrammeConnection
  | ProgrammeAggregator
  | ProgrammeGroupBy
  | ProgrammeConnectionId
  | ProgrammeConnectionCreated_At
  | ProgrammeConnectionUpdated_At
  | ProgrammeConnectionName
  | ProgrammeConnectionDescription
  | ProgrammeConnectionImage
  | ProgrammeConnectionCreated_By
  | ProgrammeConnectionUpdated_By
  | CreateProgrammePayload
  | UpdateProgrammePayload
  | DeleteProgrammePayload
  | Referral
  | ReferralConnection
  | ReferralAggregator
  | ReferralGroupBy
  | ReferralConnectionId
  | ReferralConnectionCreated_At
  | ReferralConnectionUpdated_At
  | ReferralConnectionName
  | ReferralConnectionDateOfBirth
  | ReferralConnectionNiNumber
  | ReferralConnectionProgrammes
  | ReferralConnectionReferrer
  | ReferralConnectionDescription
  | ReferralConnectionCreated_By
  | ReferralConnectionUpdated_By
  | CreateReferralPayload
  | UpdateReferralPayload
  | DeleteReferralPayload
  | Screen
  | ScreenConnection
  | ScreenAggregator
  | ScreenGroupBy
  | ScreenConnectionId
  | ScreenConnectionCreated_At
  | ScreenConnectionUpdated_At
  | ScreenConnectionTitle
  | ScreenConnectionSlug
  | ScreenConnectionUrl
  | ScreenConnectionContent
  | ScreenConnectionPublished
  | ScreenConnectionMeta
  | ScreenConnectionHero
  | ScreenConnectionSeo
  | ScreenConnectionCreated_By
  | ScreenConnectionUpdated_By
  | CreateScreenPayload
  | UpdateScreenPayload
  | DeleteScreenPayload
  | Taxonomy
  | TaxonomyConnection
  | TaxonomyAggregator
  | TaxonomyGroupBy
  | TaxonomyConnectionId
  | TaxonomyConnectionCreated_At
  | TaxonomyConnectionUpdated_At
  | TaxonomyConnectionName
  | TaxonomyConnectionType
  | TaxonomyConnectionSlug
  | TaxonomyConnectionCreated_By
  | TaxonomyConnectionUpdated_By
  | CreateTaxonomyPayload
  | UpdateTaxonomyPayload
  | DeleteTaxonomyPayload
  | UploadFile
  | UploadFileConnection
  | UploadFileAggregator
  | UploadFileAggregatorSum
  | UploadFileAggregatorAvg
  | UploadFileAggregatorMin
  | UploadFileAggregatorMax
  | UploadFileGroupBy
  | UploadFileConnectionId
  | UploadFileConnectionCreated_At
  | UploadFileConnectionUpdated_At
  | UploadFileConnectionName
  | UploadFileConnectionAlternativeText
  | UploadFileConnectionCaption
  | UploadFileConnectionWidth
  | UploadFileConnectionHeight
  | UploadFileConnectionFormats
  | UploadFileConnectionHash
  | UploadFileConnectionExt
  | UploadFileConnectionMime
  | UploadFileConnectionSize
  | UploadFileConnectionUrl
  | UploadFileConnectionPreviewUrl
  | UploadFileConnectionProvider
  | UploadFileConnectionProvider_Metadata
  | UploadFileConnectionCreated_By
  | UploadFileConnectionUpdated_By
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsRoleConnection
  | UsersPermissionsRoleAggregator
  | UsersPermissionsRoleGroupBy
  | UsersPermissionsRoleConnectionId
  | UsersPermissionsRoleConnectionName
  | UsersPermissionsRoleConnectionDescription
  | UsersPermissionsRoleConnectionType
  | UsersPermissionsRoleConnectionCreated_By
  | UsersPermissionsRoleConnectionUpdated_By
  | CreateRolePayload
  | UpdateRolePayload
  | DeleteRolePayload
  | UsersPermissionsUser
  | UsersPermissionsUserConnection
  | UsersPermissionsUserAggregator
  | UsersPermissionsUserGroupBy
  | UsersPermissionsUserConnectionId
  | UsersPermissionsUserConnectionCreated_At
  | UsersPermissionsUserConnectionUpdated_At
  | UsersPermissionsUserConnectionUsername
  | UsersPermissionsUserConnectionEmail
  | UsersPermissionsUserConnectionProvider
  | UsersPermissionsUserConnectionConfirmed
  | UsersPermissionsUserConnectionBlocked
  | UsersPermissionsUserConnectionRole
  | UsersPermissionsUserConnectionReferral
  | UsersPermissionsUserConnectionCreated_By
  | UsersPermissionsUserConnectionUpdated_By
  | CreateUserPayload
  | UpdateUserPayload
  | DeleteUserPayload
  | ComponentDataClient
  | ComponentDataContact
  | ComponentDataData
  | ComponentDataEducation
  | ComponentDataFaq
  | ComponentDataHero
  | ComponentDataLink
  | ComponentDataLinkgroup
  | ComponentDataProfile
  | ComponentDataSeo
  | ComponentDataService
  | ComponentUserContentComments

export type Mutation = {
  __typename?: 'Mutation'
  createAdcampaign?: Maybe<CreateAdcampaignPayload>
  updateAdcampaign?: Maybe<UpdateAdcampaignPayload>
  deleteAdcampaign?: Maybe<DeleteAdcampaignPayload>
  createAdlocation?: Maybe<CreateAdlocationPayload>
  updateAdlocation?: Maybe<UpdateAdlocationPayload>
  deleteAdlocation?: Maybe<DeleteAdlocationPayload>
  createAdvertiser?: Maybe<CreateAdvertiserPayload>
  updateAdvertiser?: Maybe<UpdateAdvertiserPayload>
  deleteAdvertiser?: Maybe<DeleteAdvertiserPayload>
  createAuthor?: Maybe<CreateAuthorPayload>
  updateAuthor?: Maybe<UpdateAuthorPayload>
  deleteAuthor?: Maybe<DeleteAuthorPayload>
  createBanner?: Maybe<CreateBannerPayload>
  updateBanner?: Maybe<UpdateBannerPayload>
  deleteBanner?: Maybe<DeleteBannerPayload>
  createBlog?: Maybe<CreateBlogPayload>
  updateBlog?: Maybe<UpdateBlogPayload>
  deleteBlog?: Maybe<DeleteBlogPayload>
  createClient?: Maybe<CreateClientPayload>
  updateClient?: Maybe<UpdateClientPayload>
  deleteClient?: Maybe<DeleteClientPayload>
  updateConfig?: Maybe<UpdateConfigPayload>
  deleteConfig?: Maybe<DeleteConfigPayload>
  createContent?: Maybe<CreateContentPayload>
  updateContent?: Maybe<UpdateContentPayload>
  deleteContent?: Maybe<DeleteContentPayload>
  createEvent?: Maybe<CreateEventPayload>
  updateEvent?: Maybe<UpdateEventPayload>
  deleteEvent?: Maybe<DeleteEventPayload>
  createProgramme?: Maybe<CreateProgrammePayload>
  updateProgramme?: Maybe<UpdateProgrammePayload>
  deleteProgramme?: Maybe<DeleteProgrammePayload>
  createReferral?: Maybe<CreateReferralPayload>
  updateReferral?: Maybe<UpdateReferralPayload>
  deleteReferral?: Maybe<DeleteReferralPayload>
  createScreen?: Maybe<CreateScreenPayload>
  updateScreen?: Maybe<UpdateScreenPayload>
  deleteScreen?: Maybe<DeleteScreenPayload>
  createTaxonomy?: Maybe<CreateTaxonomyPayload>
  updateTaxonomy?: Maybe<UpdateTaxonomyPayload>
  deleteTaxonomy?: Maybe<DeleteTaxonomyPayload>
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>
  upload: UploadFile
  multipleUpload: Array<Maybe<UploadFile>>
  login: UsersPermissionsLoginPayload
  register: UsersPermissionsLoginPayload
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>
  resetPassword?: Maybe<UsersPermissionsLoginPayload>
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>
}

export type MutationCreateAdcampaignArgs = {
  input?: Maybe<CreateAdcampaignInput>
}

export type MutationUpdateAdcampaignArgs = {
  input?: Maybe<UpdateAdcampaignInput>
}

export type MutationDeleteAdcampaignArgs = {
  input?: Maybe<DeleteAdcampaignInput>
}

export type MutationCreateAdlocationArgs = {
  input?: Maybe<CreateAdlocationInput>
}

export type MutationUpdateAdlocationArgs = {
  input?: Maybe<UpdateAdlocationInput>
}

export type MutationDeleteAdlocationArgs = {
  input?: Maybe<DeleteAdlocationInput>
}

export type MutationCreateAdvertiserArgs = {
  input?: Maybe<CreateAdvertiserInput>
}

export type MutationUpdateAdvertiserArgs = {
  input?: Maybe<UpdateAdvertiserInput>
}

export type MutationDeleteAdvertiserArgs = {
  input?: Maybe<DeleteAdvertiserInput>
}

export type MutationCreateAuthorArgs = {
  input?: Maybe<CreateAuthorInput>
}

export type MutationUpdateAuthorArgs = {
  input?: Maybe<UpdateAuthorInput>
}

export type MutationDeleteAuthorArgs = {
  input?: Maybe<DeleteAuthorInput>
}

export type MutationCreateBannerArgs = {
  input?: Maybe<CreateBannerInput>
}

export type MutationUpdateBannerArgs = {
  input?: Maybe<UpdateBannerInput>
}

export type MutationDeleteBannerArgs = {
  input?: Maybe<DeleteBannerInput>
}

export type MutationCreateBlogArgs = {
  input?: Maybe<CreateBlogInput>
}

export type MutationUpdateBlogArgs = {
  input?: Maybe<UpdateBlogInput>
}

export type MutationDeleteBlogArgs = {
  input?: Maybe<DeleteBlogInput>
}

export type MutationCreateClientArgs = {
  input?: Maybe<CreateClientInput>
}

export type MutationUpdateClientArgs = {
  input?: Maybe<UpdateClientInput>
}

export type MutationDeleteClientArgs = {
  input?: Maybe<DeleteClientInput>
}

export type MutationUpdateConfigArgs = {
  input?: Maybe<UpdateConfigInput>
}

export type MutationCreateContentArgs = {
  input?: Maybe<CreateContentInput>
}

export type MutationUpdateContentArgs = {
  input?: Maybe<UpdateContentInput>
}

export type MutationDeleteContentArgs = {
  input?: Maybe<DeleteContentInput>
}

export type MutationCreateEventArgs = {
  input?: Maybe<CreateEventInput>
}

export type MutationUpdateEventArgs = {
  input?: Maybe<UpdateEventInput>
}

export type MutationDeleteEventArgs = {
  input?: Maybe<DeleteEventInput>
}

export type MutationCreateProgrammeArgs = {
  input?: Maybe<CreateProgrammeInput>
}

export type MutationUpdateProgrammeArgs = {
  input?: Maybe<UpdateProgrammeInput>
}

export type MutationDeleteProgrammeArgs = {
  input?: Maybe<DeleteProgrammeInput>
}

export type MutationCreateReferralArgs = {
  input?: Maybe<CreateReferralInput>
}

export type MutationUpdateReferralArgs = {
  input?: Maybe<UpdateReferralInput>
}

export type MutationDeleteReferralArgs = {
  input?: Maybe<DeleteReferralInput>
}

export type MutationCreateScreenArgs = {
  input?: Maybe<CreateScreenInput>
}

export type MutationUpdateScreenArgs = {
  input?: Maybe<UpdateScreenInput>
}

export type MutationDeleteScreenArgs = {
  input?: Maybe<DeleteScreenInput>
}

export type MutationCreateTaxonomyArgs = {
  input?: Maybe<CreateTaxonomyInput>
}

export type MutationUpdateTaxonomyArgs = {
  input?: Maybe<UpdateTaxonomyInput>
}

export type MutationDeleteTaxonomyArgs = {
  input?: Maybe<DeleteTaxonomyInput>
}

export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>
}

export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>
}

export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>
}

export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>
}

export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>
}

export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>
}

export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>
  ref?: Maybe<Scalars['String']>
  field?: Maybe<Scalars['String']>
  source?: Maybe<Scalars['String']>
  file: Scalars['Upload']
}

export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>
  ref?: Maybe<Scalars['String']>
  field?: Maybe<Scalars['String']>
  source?: Maybe<Scalars['String']>
  files: Array<Maybe<Scalars['Upload']>>
}

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
}

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput
}

export type MutationForgotPasswordArgs = {
  email: Scalars['String']
}

export type MutationResetPasswordArgs = {
  password: Scalars['String']
  passwordConfirmation: Scalars['String']
  code: Scalars['String']
}

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']
}

export type Programme = {
  __typename?: 'Programme'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  image?: Maybe<UploadFile>
  created_by?: Maybe<AdminUser>
  updated_by?: Maybe<AdminUser>
  gallery?: Maybe<Array<Maybe<UploadFile>>>
}

export type ProgrammeGalleryArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type ProgrammeAggregator = {
  __typename?: 'ProgrammeAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type ProgrammeConnection = {
  __typename?: 'ProgrammeConnection'
  values?: Maybe<Array<Maybe<Programme>>>
  groupBy?: Maybe<ProgrammeGroupBy>
  aggregate?: Maybe<ProgrammeAggregator>
}

export type ProgrammeConnectionCreated_At = {
  __typename?: 'ProgrammeConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<ProgrammeConnection>
}

export type ProgrammeConnectionCreated_By = {
  __typename?: 'ProgrammeConnectionCreated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ProgrammeConnection>
}

export type ProgrammeConnectionDescription = {
  __typename?: 'ProgrammeConnectionDescription'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ProgrammeConnection>
}

export type ProgrammeConnectionId = {
  __typename?: 'ProgrammeConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ProgrammeConnection>
}

export type ProgrammeConnectionImage = {
  __typename?: 'ProgrammeConnectionImage'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ProgrammeConnection>
}

export type ProgrammeConnectionName = {
  __typename?: 'ProgrammeConnectionName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ProgrammeConnection>
}

export type ProgrammeConnectionUpdated_At = {
  __typename?: 'ProgrammeConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<ProgrammeConnection>
}

export type ProgrammeConnectionUpdated_By = {
  __typename?: 'ProgrammeConnectionUpdated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ProgrammeConnection>
}

export type ProgrammeGroupBy = {
  __typename?: 'ProgrammeGroupBy'
  id?: Maybe<Array<Maybe<ProgrammeConnectionId>>>
  created_at?: Maybe<Array<Maybe<ProgrammeConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<ProgrammeConnectionUpdated_At>>>
  name?: Maybe<Array<Maybe<ProgrammeConnectionName>>>
  description?: Maybe<Array<Maybe<ProgrammeConnectionDescription>>>
  image?: Maybe<Array<Maybe<ProgrammeConnectionImage>>>
  created_by?: Maybe<Array<Maybe<ProgrammeConnectionCreated_By>>>
  updated_by?: Maybe<Array<Maybe<ProgrammeConnectionUpdated_By>>>
}

export type ProgrammeInput = {
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['ID']>
  gallery?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type Query = {
  __typename?: 'Query'
  adcampaign?: Maybe<Adcampaign>
  adcampaigns?: Maybe<Array<Maybe<Adcampaign>>>
  adcampaignsConnection?: Maybe<AdcampaignConnection>
  adlocation?: Maybe<Adlocation>
  adlocations?: Maybe<Array<Maybe<Adlocation>>>
  adlocationsConnection?: Maybe<AdlocationConnection>
  advertiser?: Maybe<Advertiser>
  advertisers?: Maybe<Array<Maybe<Advertiser>>>
  advertisersConnection?: Maybe<AdvertiserConnection>
  author?: Maybe<Author>
  authors?: Maybe<Array<Maybe<Author>>>
  authorsConnection?: Maybe<AuthorConnection>
  banner?: Maybe<Banner>
  banners?: Maybe<Array<Maybe<Banner>>>
  bannersConnection?: Maybe<BannerConnection>
  blog?: Maybe<Blog>
  blogs?: Maybe<Array<Maybe<Blog>>>
  blogsConnection?: Maybe<BlogConnection>
  client?: Maybe<Client>
  clients?: Maybe<Array<Maybe<Client>>>
  clientsConnection?: Maybe<ClientConnection>
  config?: Maybe<Config>
  content?: Maybe<Content>
  contents?: Maybe<Array<Maybe<Content>>>
  contentsConnection?: Maybe<ContentConnection>
  event?: Maybe<Event>
  events?: Maybe<Array<Maybe<Event>>>
  eventsConnection?: Maybe<EventConnection>
  programme?: Maybe<Programme>
  programmes?: Maybe<Array<Maybe<Programme>>>
  programmesConnection?: Maybe<ProgrammeConnection>
  referral?: Maybe<Referral>
  referrals?: Maybe<Array<Maybe<Referral>>>
  referralsConnection?: Maybe<ReferralConnection>
  screen?: Maybe<Screen>
  screens?: Maybe<Array<Maybe<Screen>>>
  screensConnection?: Maybe<ScreenConnection>
  taxonomy?: Maybe<Taxonomy>
  taxonomies?: Maybe<Array<Maybe<Taxonomy>>>
  taxonomiesConnection?: Maybe<TaxonomyConnection>
  files?: Maybe<Array<Maybe<UploadFile>>>
  filesConnection?: Maybe<UploadFileConnection>
  role?: Maybe<UsersPermissionsRole>
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>
  user?: Maybe<UsersPermissionsUser>
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>
  usersConnection?: Maybe<UsersPermissionsUserConnection>
  me?: Maybe<UsersPermissionsMe>
}

export type QueryAdcampaignArgs = {
  id: Scalars['ID']
}

export type QueryAdcampaignsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryAdcampaignsConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryAdlocationArgs = {
  id: Scalars['ID']
}

export type QueryAdlocationsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryAdlocationsConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryAdvertiserArgs = {
  id: Scalars['ID']
}

export type QueryAdvertisersArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryAdvertisersConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryAuthorArgs = {
  id: Scalars['ID']
}

export type QueryAuthorsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryAuthorsConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryBannerArgs = {
  id: Scalars['ID']
}

export type QueryBannersArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryBannersConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryBlogArgs = {
  id: Scalars['ID']
}

export type QueryBlogsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryBlogsConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryClientArgs = {
  id: Scalars['ID']
}

export type QueryClientsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryClientsConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryContentArgs = {
  id: Scalars['ID']
}

export type QueryContentsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryContentsConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryEventArgs = {
  id: Scalars['ID']
}

export type QueryEventsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryEventsConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryProgrammeArgs = {
  id: Scalars['ID']
}

export type QueryProgrammesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryProgrammesConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryReferralArgs = {
  id: Scalars['ID']
}

export type QueryReferralsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryReferralsConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryScreenArgs = {
  id: Scalars['ID']
}

export type QueryScreensArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryScreensConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryTaxonomyArgs = {
  id: Scalars['ID']
}

export type QueryTaxonomiesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryTaxonomiesConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryRoleArgs = {
  id: Scalars['ID']
}

export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryUserArgs = {
  id: Scalars['ID']
}

export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type Referral = {
  __typename?: 'Referral'
  id: Scalars['ID']
  created_at?: Scalars['DateTime']
  updated_at?: Scalars['DateTime']
  name?: Maybe<Scalars['String']>
  dateOfBirth?: Maybe<Scalars['DateTime']>
  niNumber?: Maybe<Scalars['String']>
  education?: Maybe<Array<Maybe<ComponentDataEducation>>>
  programmes?: Maybe<Scalars['String']>
  referrer?: Maybe<ComponentDataContact>
  description?: Maybe<Scalars['String']>
  created_by?: Maybe<AdminUser>
  updated_by?: Maybe<AdminUser>
}

export type ReferralAggregator = {
  __typename?: 'ReferralAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type ReferralConnection = {
  __typename?: 'ReferralConnection'
  values?: Maybe<Array<Maybe<Referral>>>
  groupBy?: Maybe<ReferralGroupBy>
  aggregate?: Maybe<ReferralAggregator>
}

export type ReferralConnectionCreated_At = {
  __typename?: 'ReferralConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<ReferralConnection>
}

export type ReferralConnectionCreated_By = {
  __typename?: 'ReferralConnectionCreated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ReferralConnection>
}

export type ReferralConnectionDateOfBirth = {
  __typename?: 'ReferralConnectionDateOfBirth'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<ReferralConnection>
}

export type ReferralConnectionDescription = {
  __typename?: 'ReferralConnectionDescription'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ReferralConnection>
}

export type ReferralConnectionId = {
  __typename?: 'ReferralConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ReferralConnection>
}

export type ReferralConnectionName = {
  __typename?: 'ReferralConnectionName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ReferralConnection>
}

export type ReferralConnectionNiNumber = {
  __typename?: 'ReferralConnectionNiNumber'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ReferralConnection>
}

export type ReferralConnectionProgrammes = {
  __typename?: 'ReferralConnectionProgrammes'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ReferralConnection>
}

export type ReferralConnectionReferrer = {
  __typename?: 'ReferralConnectionReferrer'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ReferralConnection>
}

export type ReferralConnectionUpdated_At = {
  __typename?: 'ReferralConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<ReferralConnection>
}

export type ReferralConnectionUpdated_By = {
  __typename?: 'ReferralConnectionUpdated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ReferralConnection>
}

export type ReferralGroupBy = {
  __typename?: 'ReferralGroupBy'
  id?: Maybe<Array<Maybe<ReferralConnectionId>>>
  created_at?: Maybe<Array<Maybe<ReferralConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<ReferralConnectionUpdated_At>>>
  name?: Maybe<Array<Maybe<ReferralConnectionName>>>
  dateOfBirth?: Maybe<Array<Maybe<ReferralConnectionDateOfBirth>>>
  niNumber?: Maybe<Array<Maybe<ReferralConnectionNiNumber>>>
  programmes?: Maybe<Array<Maybe<ReferralConnectionProgrammes>>>
  referrer?: Maybe<Array<Maybe<ReferralConnectionReferrer>>>
  description?: Maybe<Array<Maybe<ReferralConnectionDescription>>>
  created_by?: Maybe<Array<Maybe<ReferralConnectionCreated_By>>>
  updated_by?: Maybe<Array<Maybe<ReferralConnectionUpdated_By>>>
}

export type ReferralInput = {
  name?: Maybe<Scalars['String']>
  dateOfBirth?: Maybe<Scalars['DateTime']>
  niNumber?: Maybe<Scalars['String']>
  education?: Maybe<Array<Maybe<ComponentDataEducationInput>>>
  programmes?: Maybe<Scalars['String']>
  referrer?: Maybe<ComponentDataContactInput>
  description?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type RoleInput = {
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>
  users?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type Screen = {
  __typename?: 'Screen'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  title?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  published?: Maybe<Scalars['Boolean']>
  meta?: Maybe<Scalars['JSON']>
  hero?: Maybe<ComponentDataHero>
  faqs?: Maybe<Array<Maybe<ComponentDataFaq>>>
  data?: Maybe<Array<Maybe<ScreenDataDynamicZone>>>
  seo?: Maybe<ComponentDataSeo>
  links?: Maybe<Array<Maybe<ComponentDataLinkgroup>>>
  created_by?: Maybe<AdminUser>
  updated_by?: Maybe<AdminUser>
  banners?: Maybe<Array<Maybe<Banner>>>
  adlocations?: Maybe<Array<Maybe<Adlocation>>>
  contents?: Maybe<Array<Maybe<Content>>>
}

export type ScreenBannersArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type ScreenAdlocationsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type ScreenContentsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type ScreenAggregator = {
  __typename?: 'ScreenAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type ScreenConnection = {
  __typename?: 'ScreenConnection'
  values?: Maybe<Array<Maybe<Screen>>>
  groupBy?: Maybe<ScreenGroupBy>
  aggregate?: Maybe<ScreenAggregator>
}

export type ScreenConnectionContent = {
  __typename?: 'ScreenConnectionContent'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ScreenConnection>
}

export type ScreenConnectionCreated_At = {
  __typename?: 'ScreenConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<ScreenConnection>
}

export type ScreenConnectionCreated_By = {
  __typename?: 'ScreenConnectionCreated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ScreenConnection>
}

export type ScreenConnectionHero = {
  __typename?: 'ScreenConnectionHero'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ScreenConnection>
}

export type ScreenConnectionId = {
  __typename?: 'ScreenConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ScreenConnection>
}

export type ScreenConnectionMeta = {
  __typename?: 'ScreenConnectionMeta'
  key?: Maybe<Scalars['JSON']>
  connection?: Maybe<ScreenConnection>
}

export type ScreenConnectionPublished = {
  __typename?: 'ScreenConnectionPublished'
  key?: Maybe<Scalars['Boolean']>
  connection?: Maybe<ScreenConnection>
}

export type ScreenConnectionSeo = {
  __typename?: 'ScreenConnectionSeo'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ScreenConnection>
}

export type ScreenConnectionSlug = {
  __typename?: 'ScreenConnectionSlug'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ScreenConnection>
}

export type ScreenConnectionTitle = {
  __typename?: 'ScreenConnectionTitle'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ScreenConnection>
}

export type ScreenConnectionUpdated_At = {
  __typename?: 'ScreenConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<ScreenConnection>
}

export type ScreenConnectionUpdated_By = {
  __typename?: 'ScreenConnectionUpdated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ScreenConnection>
}

export type ScreenConnectionUrl = {
  __typename?: 'ScreenConnectionUrl'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ScreenConnection>
}

export type ScreenDataDynamicZone =
  | ComponentDataContact
  | ComponentDataClient
  | ComponentDataService

export type ScreenGroupBy = {
  __typename?: 'ScreenGroupBy'
  id?: Maybe<Array<Maybe<ScreenConnectionId>>>
  created_at?: Maybe<Array<Maybe<ScreenConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<ScreenConnectionUpdated_At>>>
  title?: Maybe<Array<Maybe<ScreenConnectionTitle>>>
  slug?: Maybe<Array<Maybe<ScreenConnectionSlug>>>
  url?: Maybe<Array<Maybe<ScreenConnectionUrl>>>
  content?: Maybe<Array<Maybe<ScreenConnectionContent>>>
  published?: Maybe<Array<Maybe<ScreenConnectionPublished>>>
  meta?: Maybe<Array<Maybe<ScreenConnectionMeta>>>
  hero?: Maybe<Array<Maybe<ScreenConnectionHero>>>
  seo?: Maybe<Array<Maybe<ScreenConnectionSeo>>>
  created_by?: Maybe<Array<Maybe<ScreenConnectionCreated_By>>>
  updated_by?: Maybe<Array<Maybe<ScreenConnectionUpdated_By>>>
}

export type ScreenInput = {
  title?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  published?: Maybe<Scalars['Boolean']>
  banners?: Maybe<Array<Maybe<Scalars['ID']>>>
  adlocations?: Maybe<Array<Maybe<Scalars['ID']>>>
  meta?: Maybe<Scalars['JSON']>
  hero?: Maybe<ComponentDataHeroInput>
  faqs?: Maybe<Array<Maybe<ComponentDataFaqInput>>>
  data?: Maybe<Array<Scalars['ScreenDataDynamicZoneInput']>>
  seo?: Maybe<ComponentDataSeoInput>
  links?: Maybe<Array<Maybe<ComponentDataLinkgroupInput>>>
  contents?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type Taxonomy = {
  __typename?: 'Taxonomy'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  name?: Maybe<Scalars['String']>
  type?: Maybe<Enum_Taxonomy_Type>
  slug?: Maybe<Scalars['String']>
  created_by?: Maybe<AdminUser>
  updated_by?: Maybe<AdminUser>
  blogs?: Maybe<Array<Maybe<Blog>>>
}

export type TaxonomyBlogsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type TaxonomyAggregator = {
  __typename?: 'TaxonomyAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type TaxonomyConnection = {
  __typename?: 'TaxonomyConnection'
  values?: Maybe<Array<Maybe<Taxonomy>>>
  groupBy?: Maybe<TaxonomyGroupBy>
  aggregate?: Maybe<TaxonomyAggregator>
}

export type TaxonomyConnectionCreated_At = {
  __typename?: 'TaxonomyConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<TaxonomyConnection>
}

export type TaxonomyConnectionCreated_By = {
  __typename?: 'TaxonomyConnectionCreated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<TaxonomyConnection>
}

export type TaxonomyConnectionId = {
  __typename?: 'TaxonomyConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<TaxonomyConnection>
}

export type TaxonomyConnectionName = {
  __typename?: 'TaxonomyConnectionName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<TaxonomyConnection>
}

export type TaxonomyConnectionSlug = {
  __typename?: 'TaxonomyConnectionSlug'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<TaxonomyConnection>
}

export type TaxonomyConnectionType = {
  __typename?: 'TaxonomyConnectionType'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<TaxonomyConnection>
}

export type TaxonomyConnectionUpdated_At = {
  __typename?: 'TaxonomyConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<TaxonomyConnection>
}

export type TaxonomyConnectionUpdated_By = {
  __typename?: 'TaxonomyConnectionUpdated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<TaxonomyConnection>
}

export type TaxonomyGroupBy = {
  __typename?: 'TaxonomyGroupBy'
  id?: Maybe<Array<Maybe<TaxonomyConnectionId>>>
  created_at?: Maybe<Array<Maybe<TaxonomyConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<TaxonomyConnectionUpdated_At>>>
  name?: Maybe<Array<Maybe<TaxonomyConnectionName>>>
  type?: Maybe<Array<Maybe<TaxonomyConnectionType>>>
  slug?: Maybe<Array<Maybe<TaxonomyConnectionSlug>>>
  created_by?: Maybe<Array<Maybe<TaxonomyConnectionCreated_By>>>
  updated_by?: Maybe<Array<Maybe<TaxonomyConnectionUpdated_By>>>
}

export type TaxonomyInput = {
  name?: Maybe<Scalars['String']>
  type?: Maybe<Enum_Taxonomy_Type>
  slug?: Maybe<Scalars['String']>
  blogs?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type UpdateAdcampaignInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditAdcampaignInput>
}

export type UpdateAdcampaignPayload = {
  __typename?: 'updateAdcampaignPayload'
  adcampaign?: Maybe<Adcampaign>
}

export type UpdateAdlocationInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditAdlocationInput>
}

export type UpdateAdlocationPayload = {
  __typename?: 'updateAdlocationPayload'
  adlocation?: Maybe<Adlocation>
}

export type UpdateAdvertiserInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditAdvertiserInput>
}

export type UpdateAdvertiserPayload = {
  __typename?: 'updateAdvertiserPayload'
  advertiser?: Maybe<Advertiser>
}

export type UpdateAuthorInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditAuthorInput>
}

export type UpdateAuthorPayload = {
  __typename?: 'updateAuthorPayload'
  author?: Maybe<Author>
}

export type UpdateBannerInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditBannerInput>
}

export type UpdateBannerPayload = {
  __typename?: 'updateBannerPayload'
  banner?: Maybe<Banner>
}

export type UpdateBlogInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditBlogInput>
}

export type UpdateBlogPayload = {
  __typename?: 'updateBlogPayload'
  blog?: Maybe<Blog>
}

export type UpdateClientInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditClientInput>
}

export type UpdateClientPayload = {
  __typename?: 'updateClientPayload'
  client?: Maybe<Client>
}

export type UpdateConfigInput = {
  data?: Maybe<EditConfigInput>
}

export type UpdateConfigPayload = {
  __typename?: 'updateConfigPayload'
  config?: Maybe<Config>
}

export type UpdateContentInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditContentInput>
}

export type UpdateContentPayload = {
  __typename?: 'updateContentPayload'
  content?: Maybe<Content>
}

export type UpdateEventInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditEventInput>
}

export type UpdateEventPayload = {
  __typename?: 'updateEventPayload'
  event?: Maybe<Event>
}

export type UpdateProgrammeInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditProgrammeInput>
}

export type UpdateProgrammePayload = {
  __typename?: 'updateProgrammePayload'
  programme?: Maybe<Programme>
}

export type UpdateReferralInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditReferralInput>
}

export type UpdateReferralPayload = {
  __typename?: 'updateReferralPayload'
  referral?: Maybe<Referral>
}

export type UpdateRoleInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditRoleInput>
}

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload'
  role?: Maybe<UsersPermissionsRole>
}

export type UpdateScreenInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditScreenInput>
}

export type UpdateScreenPayload = {
  __typename?: 'updateScreenPayload'
  screen?: Maybe<Screen>
}

export type UpdateTaxonomyInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditTaxonomyInput>
}

export type UpdateTaxonomyPayload = {
  __typename?: 'updateTaxonomyPayload'
  taxonomy?: Maybe<Taxonomy>
}

export type UpdateUserInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditUserInput>
}

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload'
  user?: Maybe<UsersPermissionsUser>
}

export type UploadFile = {
  __typename?: 'UploadFile'
  id?: Scalars['ID']
  created_at?: Scalars['DateTime']
  updated_at?: Scalars['DateTime']
  name: Scalars['String']
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  formats?: Maybe<Scalars['JSON']>
  hash?: Scalars['String']
  ext?: Maybe<Scalars['String']>
  mime?: Scalars['String']
  size?: Scalars['Float']
  url: Scalars['String']
  previewUrl?: Maybe<Scalars['String']>
  provider?: Scalars['String']
  provider_metadata?: Maybe<Scalars['JSON']>
  created_by?: Maybe<AdminUser>
  updated_by?: Maybe<AdminUser>
  related?: Maybe<Array<Maybe<Morph>>>
}

export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
  sum?: Maybe<UploadFileAggregatorSum>
  avg?: Maybe<UploadFileAggregatorAvg>
  min?: Maybe<UploadFileAggregatorMin>
  max?: Maybe<UploadFileAggregatorMax>
}

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg'
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax'
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin'
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum'
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
}

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection'
  values?: Maybe<Array<Maybe<UploadFile>>>
  groupBy?: Maybe<UploadFileGroupBy>
  aggregate?: Maybe<UploadFileAggregator>
}

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionCreated_By = {
  __typename?: 'UploadFileConnectionCreated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats'
  key?: Maybe<Scalars['JSON']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight'
  key?: Maybe<Scalars['Int']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata'
  key?: Maybe<Scalars['JSON']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize'
  key?: Maybe<Scalars['Float']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionUpdated_By = {
  __typename?: 'UploadFileConnectionUpdated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth'
  key?: Maybe<Scalars['Int']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy'
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>
  created_by?: Maybe<Array<Maybe<UploadFileConnectionCreated_By>>>
  updated_by?: Maybe<Array<Maybe<UploadFileConnectionUpdated_By>>>
}

export type UserInput = {
  username: Scalars['String']
  email: Scalars['String']
  provider?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  resetPasswordToken?: Maybe<Scalars['String']>
  confirmed?: Maybe<Scalars['Boolean']>
  blocked?: Maybe<Scalars['Boolean']>
  role?: Maybe<Scalars['ID']>
  referral?: Maybe<Scalars['ID']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']
  password: Scalars['String']
  provider?: Maybe<Scalars['String']>
}

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload'
  jwt?: Maybe<Scalars['String']>
  user: UsersPermissionsMe
}

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe'
  id: Scalars['ID']
  username: Scalars['String']
  email: Scalars['String']
  confirmed?: Maybe<Scalars['Boolean']>
  blocked?: Maybe<Scalars['Boolean']>
  role?: Maybe<UsersPermissionsMeRole>
}

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole'
  id: Scalars['ID']
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission'
  id: Scalars['ID']
  type: Scalars['String']
  controller: Scalars['String']
  action: Scalars['String']
  enabled: Scalars['Boolean']
  policy?: Maybe<Scalars['String']>
  role?: Maybe<UsersPermissionsRole>
  created_by?: Maybe<AdminUser>
  updated_by?: Maybe<AdminUser>
}

export type UsersPermissionsRegisterInput = {
  username: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
}

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole'
  id: Scalars['ID']
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  created_by?: Maybe<AdminUser>
  updated_by?: Maybe<AdminUser>
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>
}

export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection'
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>
  aggregate?: Maybe<UsersPermissionsRoleAggregator>
}

export type UsersPermissionsRoleConnectionCreated_By = {
  __typename?: 'UsersPermissionsRoleConnectionCreated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UsersPermissionsRoleConnection>
}

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsRoleConnection>
}

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UsersPermissionsRoleConnection>
}

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsRoleConnection>
}

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsRoleConnection>
}

export type UsersPermissionsRoleConnectionUpdated_By = {
  __typename?: 'UsersPermissionsRoleConnectionUpdated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UsersPermissionsRoleConnection>
}

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy'
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>
  created_by?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionCreated_By>>>
  updated_by?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionUpdated_By>>>
}

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser'
  id: Scalars['ID']
  created_at?: Scalars['DateTime']
  updated_at?: Scalars['DateTime']
  username: Scalars['String']
  email: Scalars['String']
  provider?: Maybe<Scalars['String']>
  confirmed?: Maybe<Scalars['Boolean']>
  blocked?: Maybe<Scalars['Boolean']>
  role?: Maybe<UsersPermissionsRole>
  referral?: Maybe<Referral>
  created_by?: Maybe<AdminUser>
  updated_by?: Maybe<AdminUser>
}

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection'
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>
  groupBy?: Maybe<UsersPermissionsUserGroupBy>
  aggregate?: Maybe<UsersPermissionsUserAggregator>
}

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked'
  key?: Maybe<Scalars['Boolean']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed'
  key?: Maybe<Scalars['Boolean']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionCreated_By = {
  __typename?: 'UsersPermissionsUserConnectionCreated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionReferral = {
  __typename?: 'UsersPermissionsUserConnectionReferral'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionUpdated_By = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_by'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy'
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>
  referral?: Maybe<Array<Maybe<UsersPermissionsUserConnectionReferral>>>
  created_by?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_By>>>
  updated_by?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_By>>>
}

/**
 * One possible value for a given Enum. Enum values are unique values, not a
 * placeholder for a string or numeric value. However an Enum value is returned in
 * a JSON response as a string.
 */
export type __EnumValue = {
  __typename?: '__EnumValue'
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  isDeprecated: Scalars['Boolean']
  deprecationReason?: Maybe<Scalars['String']>
}

/**
 * Object and Interface types are described by a list of Fields, each of which has
 * a name, potentially a list of arguments, and a return type.
 */
export type __Field = {
  __typename?: '__Field'
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  args: Array<__InputValue>
  type: __Type
  isDeprecated: Scalars['Boolean']
  deprecationReason?: Maybe<Scalars['String']>
}

/**
 * Arguments provided to Fields or Directives and the input fields of an
 * InputObject are represented as Input Values which describe their type and
 * optionally a default value.
 */
export type __InputValue = {
  __typename?: '__InputValue'
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  type: __Type
  /** A GraphQL-formatted string representing the default value for this input value. */
  defaultValue?: Maybe<Scalars['String']>
}

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of
 * types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that
 * type. Scalar types provide no information beyond a name and description, while
 * Enum types provide their values. Object and Interface types provide the fields
 * they describe. Abstract types, Union and Interface, provide the Object types
 * possible at runtime. List and NonNull types compose other types.
 */
export type __Type = {
  __typename?: '__Type'
  kind: __TypeKind
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  fields?: Maybe<Array<__Field>>
  interfaces?: Maybe<Array<__Type>>
  possibleTypes?: Maybe<Array<__Type>>
  enumValues?: Maybe<Array<__EnumValue>>
  inputFields?: Maybe<Array<__InputValue>>
  ofType?: Maybe<__Type>
}

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of
 * types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that
 * type. Scalar types provide no information beyond a name and description, while
 * Enum types provide their values. Object and Interface types provide the fields
 * they describe. Abstract types, Union and Interface, provide the Object types
 * possible at runtime. List and NonNull types compose other types.
 */
export type __TypeFieldsArgs = {
  includeDeprecated?: Maybe<Scalars['Boolean']>
}

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of
 * types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that
 * type. Scalar types provide no information beyond a name and description, while
 * Enum types provide their values. Object and Interface types provide the fields
 * they describe. Abstract types, Union and Interface, provide the Object types
 * possible at runtime. List and NonNull types compose other types.
 */
export type __TypeEnumValuesArgs = {
  includeDeprecated?: Maybe<Scalars['Boolean']>
}

/** An enum describing what kind of type a given `__Type` is. */
export enum __TypeKind {
  /** Indicates this type is a scalar. */
  Scalar = 'SCALAR',
  /** Indicates this type is an object. `fields` and `interfaces` are valid fields. */
  Object = 'OBJECT',
  /** Indicates this type is an interface. `fields` and `possibleTypes` are valid fields. */
  Interface = 'INTERFACE',
  /** Indicates this type is a union. `possibleTypes` is a valid field. */
  Union = 'UNION',
  /** Indicates this type is an enum. `enumValues` is a valid field. */
  Enum = 'ENUM',
  /** Indicates this type is an input object. `inputFields` is a valid field. */
  InputObject = 'INPUT_OBJECT',
  /** Indicates this type is a list. `ofType` is a valid field. */
  List = 'LIST',
  /** Indicates this type is a non-null. `ofType` is a valid field. */
  NonNull = 'NON_NULL'
}

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>

export type Unnamed_1_Query = { __typename?: 'Query' } & {
  blogs?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Blog' } & Pick<
          Blog,
          'title' | 'content' | 'data' | 'slug' | 'excerpt'
        > & {
            image?: Maybe<
              Array<
                Maybe<{ __typename?: 'UploadFile' } & Pick<UploadFile, 'url'>>
              >
            >
            seo?: Maybe<
              { __typename?: 'ComponentDataSeo' } & Pick<
                ComponentDataSeo,
                'title' | 'type' | 'description' | 'locale'
              > & {
                  image?: Maybe<
                    { __typename?: 'UploadFile' } & Pick<UploadFile, 'url'>
                  >
                }
            >
            hero?: Maybe<
              { __typename?: 'ComponentDataHero' } & Pick<
                ComponentDataHero,
                'content' | 'url'
              > & {
                  media?: Maybe<
                    Array<
                      Maybe<
                        { __typename?: 'UploadFile' } & Pick<UploadFile, 'url'>
                      >
                    >
                  >
                }
            >
            comments?: Maybe<
              Array<
                Maybe<
                  { __typename?: 'ComponentUserContentComments' } & Pick<
                    ComponentUserContentComments,
                    'message' | 'likes'
                  > & {
                      user?: Maybe<
                        { __typename?: 'UsersPermissionsUser' } & Pick<
                          UsersPermissionsUser,
                          'username'
                        >
                      >
                    }
                >
              >
            >
          }
      >
    >
  >
}

export type Unnamed_2_QueryVariables = Exact<{
  slug: Scalars['String']
}>

export type Unnamed_2_Query = { __typename?: 'Query' } & {
  blogs?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Blog' } & Pick<
          Blog,
          'title' | 'content' | 'data' | 'slug'
        > & {
            image?: Maybe<
              Array<
                Maybe<{ __typename?: 'UploadFile' } & Pick<UploadFile, 'url'>>
              >
            >
            taxonomies?: Maybe<
              Array<Maybe<{ __typename?: 'Taxonomy' } & Pick<Taxonomy, 'name'>>>
            >
            seo?: Maybe<
              { __typename?: 'ComponentDataSeo' } & Pick<
                ComponentDataSeo,
                'title' | 'type' | 'description' | 'locale'
              > & {
                  image?: Maybe<
                    { __typename?: 'UploadFile' } & Pick<UploadFile, 'url'>
                  >
                }
            >
            hero?: Maybe<
              { __typename?: 'ComponentDataHero' } & Pick<
                ComponentDataHero,
                'content' | 'url'
              > & {
                  media?: Maybe<
                    Array<
                      Maybe<
                        { __typename?: 'UploadFile' } & Pick<UploadFile, 'url'>
                      >
                    >
                  >
                }
            >
            comments?: Maybe<
              Array<
                Maybe<
                  { __typename?: 'ComponentUserContentComments' } & Pick<
                    ComponentUserContentComments,
                    'message' | 'likes'
                  > & {
                      user?: Maybe<
                        { __typename?: 'UsersPermissionsUser' } & Pick<
                          UsersPermissionsUser,
                          'username'
                        >
                      >
                    }
                >
              >
            >
          }
      >
    >
  >
}

export type Unnamed_3_QueryVariables = Exact<{ [key: string]: never }>

export type Unnamed_3_Query = { __typename?: 'Query' } & {
  clients?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Client' } & Pick<
          Client,
          | 'name'
          | 'description'
          | 'location'
          | 'slug'
          | 'services'
          | 'sector'
          | 'website'
        > & {
            logo?: Maybe<
              { __typename?: 'UploadFile' } & Pick<
                UploadFile,
                'url' | 'size' | 'name'
              >
            >
            images?: Maybe<
              Array<
                Maybe<
                  { __typename?: 'UploadFile' } & Pick<
                    UploadFile,
                    'name' | 'mime' | 'size' | 'url'
                  >
                >
              >
            >
          }
      >
    >
  >
}

export type Unnamed_4_QueryVariables = Exact<{
  slug: Scalars['String']
}>

export type Unnamed_4_Query = { __typename?: 'Query' } & {
  clients?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Client' } & Pick<
          Client,
          | 'name'
          | 'description'
          | 'location'
          | 'slug'
          | 'services'
          | 'sector'
          | 'website'
        > & {
            logo?: Maybe<
              { __typename?: 'UploadFile' } & Pick<
                UploadFile,
                'url' | 'size' | 'name'
              >
            >
            images?: Maybe<
              Array<
                Maybe<
                  { __typename?: 'UploadFile' } & Pick<
                    UploadFile,
                    'name' | 'mime' | 'size' | 'url'
                  >
                >
              >
            >
          }
      >
    >
  >
}

export type Unnamed_5_QueryVariables = Exact<{
  adLocation?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
}>

export type Unnamed_5_Query = { __typename?: 'Query' } & {
  adlocations?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Adlocation' } & {
          banners?: Maybe<
            Array<
              Maybe<
                { __typename?: 'Banner' } & Pick<
                  Banner,
                  'title' | 'url' | 'size' | 'expiry'
                > & {
                    image?: Maybe<
                      Array<
                        Maybe<
                          { __typename?: 'UploadFile' } & Pick<
                            UploadFile,
                            'name' | 'url'
                          >
                        >
                      >
                    >
                  }
              >
            >
          >
        }
      >
    >
  >
}

export type Unnamed_6_QueryVariables = Exact<{ [key: string]: never }>

export type Unnamed_6_Query = { __typename?: 'Query' } & {
  screens?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Screen' } & Pick<
          Screen,
          'id' | 'slug' | 'url' | 'title'
        >
      >
    >
  >
}

export type Unnamed_7_QueryVariables = Exact<{
  slug: Scalars['String']
}>

export type Unnamed_7_Query = { __typename?: 'Query' } & {
  contents?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Content' } & Pick<
          Content,
          'name' | 'content' | 'meta' | 'ctaLink' | 'ctaText' | 'slug'
        > & {
            media?: Maybe<
              { __typename?: 'UploadFile' } & Pick<
                UploadFile,
                'url' | 'size' | 'name'
              >
            >
            links?: Maybe<
              Array<
                Maybe<
                  { __typename?: 'ComponentDataLinkgroup' } & Pick<
                    ComponentDataLinkgroup,
                    'title'
                  > & {
                      links?: Maybe<
                        Array<
                          Maybe<
                            { __typename?: 'ComponentDataLink' } & Pick<
                              ComponentDataLink,
                              'label' | 'href'
                            >
                          >
                        >
                      >
                    }
                >
              >
            >
          }
      >
    >
  >
}

export type Unnamed_8_QueryVariables = Exact<{ [key: string]: never }>

export type Unnamed_8_Query = { __typename?: 'Query' } & {
  __type?: Maybe<
    { __typename?: '__Type' } & {
      enumValues?: Maybe<
        Array<{ __typename?: '__EnumValue' } & Pick<__EnumValue, 'name'>>
      >
    }
  >
}

export type Unnamed_9_MutationVariables = Exact<{
  refId?: Maybe<Scalars['ID']>
  ref?: Maybe<Scalars['String']>
  field?: Maybe<Scalars['String']>
  source?: Maybe<Scalars['String']>
  file: Scalars['Upload']
}>

export type Unnamed_9_Mutation = { __typename?: 'Mutation' } & {
  upload: { __typename?: 'UploadFile' } & Pick<
    UploadFile,
    'id' | 'name' | 'url' | 'size'
  >
}

export type Unnamed_10_MutationVariables = Exact<{
  input: CreateReferralInput
}>

export type Unnamed_10_Mutation = { __typename?: 'Mutation' } & {
  createReferral?: Maybe<
    { __typename?: 'createReferralPayload' } & {
      referral?: Maybe<{ __typename?: 'Referral' } & Pick<Referral, 'id'>>
    }
  >
}

export type Unnamed_11_QueryVariables = Exact<{
  slug: Scalars['String']
}>

export type Unnamed_11_Query = { __typename?: 'Query' } & {
  screens?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Screen' } & Pick<
          Screen,
          'id' | 'title' | 'slug' | 'url' | 'content' | 'meta'
        > & {
            hero?: Maybe<
              { __typename?: 'ComponentDataHero' } & Pick<
                ComponentDataHero,
                'content' | 'ctaText' | 'meta' | 'url'
              > & {
                  media?: Maybe<
                    Array<
                      Maybe<
                        { __typename?: 'UploadFile' } & Pick<
                          UploadFile,
                          'name' | 'mime' | 'size' | 'url'
                        >
                      >
                    >
                  >
                }
            >
            contents?: Maybe<
              Array<
                Maybe<
                  { __typename?: 'Content' } & Pick<
                    Content,
                    'id' | 'name' | 'meta' | 'content'
                  > & {
                      media?: Maybe<
                        { __typename?: 'UploadFile' } & Pick<
                          UploadFile,
                          'name' | 'mime' | 'size' | 'url'
                        >
                      >
                    }
                >
              >
            >
          }
      >
    >
  >
}

export type Unnamed_12_QueryVariables = Exact<{
  slug: Scalars['String']
}>

export type Unnamed_12_Query = { __typename?: 'Query' } & {
  screens?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Screen' } & Pick<
          Screen,
          'id' | 'title' | 'slug' | 'url' | 'content' | 'meta'
        > & {
            hero?: Maybe<
              { __typename?: 'ComponentDataHero' } & Pick<
                ComponentDataHero,
                'content' | 'ctaText' | 'meta' | 'url'
              > & {
                  media?: Maybe<
                    Array<
                      Maybe<
                        { __typename?: 'UploadFile' } & Pick<
                          UploadFile,
                          'name' | 'mime' | 'size' | 'url'
                        >
                      >
                    >
                  >
                }
            >
            contents?: Maybe<
              Array<
                Maybe<
                  { __typename?: 'Content' } & Pick<
                    Content,
                    'id' | 'name' | 'meta' | 'content'
                  > & {
                      media?: Maybe<
                        { __typename?: 'UploadFile' } & Pick<
                          UploadFile,
                          'name' | 'mime' | 'size' | 'url'
                        >
                      >
                    }
                >
              >
            >
            data?: Maybe<
              Array<
                Maybe<
                  | { __typename: 'ComponentDataContact' }
                  | ({ __typename: 'ComponentDataClient' } & Pick<
                      ComponentDataClient,
                      | 'name'
                      | 'description'
                      | 'location'
                      | 'services'
                      | 'sector'
                      | 'website'
                    > & {
                        logo?: Maybe<
                          { __typename?: 'UploadFile' } & Pick<
                            UploadFile,
                            'url' | 'size' | 'name'
                          >
                        >
                        images?: Maybe<
                          Array<
                            Maybe<
                              { __typename?: 'UploadFile' } & Pick<
                                UploadFile,
                                'name' | 'mime' | 'size' | 'url'
                              >
                            >
                          >
                        >
                      })
                  | { __typename: 'ComponentDataService' }
                >
              >
            >
          }
      >
    >
  >
}

export type Unnamed_13_QueryVariables = Exact<{
  slug: Scalars['String']
}>

export type Unnamed_13_Query = { __typename?: 'Query' } & {
  screens?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Screen' } & Pick<
          Screen,
          'id' | 'title' | 'slug' | 'url' | 'content' | 'meta'
        > & {
            hero?: Maybe<
              { __typename?: 'ComponentDataHero' } & Pick<
                ComponentDataHero,
                'content' | 'ctaText' | 'meta' | 'url'
              > & {
                  media?: Maybe<
                    Array<
                      Maybe<
                        { __typename?: 'UploadFile' } & Pick<
                          UploadFile,
                          'name' | 'mime' | 'size' | 'url'
                        >
                      >
                    >
                  >
                }
            >
            contents?: Maybe<
              Array<
                Maybe<
                  { __typename?: 'Content' } & Pick<
                    Content,
                    'id' | 'name' | 'meta' | 'content'
                  > & {
                      media?: Maybe<
                        { __typename?: 'UploadFile' } & Pick<
                          UploadFile,
                          'name' | 'mime' | 'size' | 'url'
                        >
                      >
                    }
                >
              >
            >
            data?: Maybe<
              Array<
                Maybe<
                  | { __typename: 'ComponentDataContact' }
                  | { __typename: 'ComponentDataClient' }
                  | ({ __typename: 'ComponentDataService' } & Pick<
                      ComponentDataService,
                      'name' | 'description' | 'website'
                    > & {
                        image?: Maybe<
                          { __typename?: 'UploadFile' } & Pick<
                            UploadFile,
                            'url' | 'size' | 'name'
                          >
                        >
                      })
                >
              >
            >
          }
      >
    >
  >
}

export type Unnamed_14_MutationVariables = Exact<{
  input?: Maybe<UpdateUserInput>
}>

export type Unnamed_14_Mutation = { __typename?: 'Mutation' } & {
  updateUser?: Maybe<
    { __typename?: 'updateUserPayload' } & {
      user?: Maybe<
        { __typename?: 'UsersPermissionsUser' } & Pick<
          UsersPermissionsUser,
          'username'
        >
      >
    }
  >
}

export type Unnamed_15_QueryVariables = Exact<{
  id: Scalars['ID']
}>

export type Unnamed_15_Query = { __typename?: 'Query' } & {
  user?: Maybe<
    { __typename?: 'UsersPermissionsUser' } & Pick<
      UsersPermissionsUser,
      'id' | 'username' | 'email' | 'confirmed'
    > & {
        referral?: Maybe<
          { __typename?: 'Referral' } & Pick<
            Referral,
            'name' | 'dateOfBirth' | 'niNumber' | 'programmes'
          > & {
              education?: Maybe<
                Array<
                  Maybe<
                    { __typename?: 'ComponentDataEducation' } & Pick<
                      ComponentDataEducation,
                      'name' | 'startDate' | 'endDate' | 'notes'
                    >
                  >
                >
              >
              referrer?: Maybe<
                { __typename?: 'ComponentDataContact' } & Pick<
                  ComponentDataContact,
                  'name' | 'email' | 'position' | 'content'
                > & {
                    media?: Maybe<
                      { __typename?: 'UploadFile' } & Pick<
                        UploadFile,
                        'name' | 'url'
                      >
                    >
                  }
              >
            }
        >
      }
  >
}

export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string
      name: string
      possibleTypes: {
        name: string
      }[]
    }[]
  }
}
const result: IntrospectionResultData = {
  __schema: {
    types: [
      {
        kind: 'UNION',
        name: 'Morph',
        possibleTypes: [
          {
            name: 'UsersPermissionsMe'
          },
          {
            name: 'UsersPermissionsMeRole'
          },
          {
            name: 'UsersPermissionsLoginPayload'
          },
          {
            name: 'UserPermissionsPasswordPayload'
          },
          {
            name: 'Adcampaign'
          },
          {
            name: 'AdcampaignConnection'
          },
          {
            name: 'AdcampaignAggregator'
          },
          {
            name: 'AdcampaignGroupBy'
          },
          {
            name: 'AdcampaignConnectionId'
          },
          {
            name: 'AdcampaignConnectionCreated_at'
          },
          {
            name: 'AdcampaignConnectionUpdated_at'
          },
          {
            name: 'AdcampaignConnectionAdvertiser'
          },
          {
            name: 'AdcampaignConnectionName'
          },
          {
            name: 'AdcampaignConnectionExpiry'
          },
          {
            name: 'AdcampaignConnectionActive'
          },
          {
            name: 'AdcampaignConnectionCreated_by'
          },
          {
            name: 'AdcampaignConnectionUpdated_by'
          },
          {
            name: 'createAdcampaignPayload'
          },
          {
            name: 'updateAdcampaignPayload'
          },
          {
            name: 'deleteAdcampaignPayload'
          },
          {
            name: 'Adlocation'
          },
          {
            name: 'AdlocationConnection'
          },
          {
            name: 'AdlocationAggregator'
          },
          {
            name: 'AdlocationGroupBy'
          },
          {
            name: 'AdlocationConnectionId'
          },
          {
            name: 'AdlocationConnectionCreated_at'
          },
          {
            name: 'AdlocationConnectionUpdated_at'
          },
          {
            name: 'AdlocationConnectionSlug'
          },
          {
            name: 'AdlocationConnectionPosition'
          },
          {
            name: 'AdlocationConnectionScreen'
          },
          {
            name: 'AdlocationConnectionCreated_by'
          },
          {
            name: 'AdlocationConnectionUpdated_by'
          },
          {
            name: 'createAdlocationPayload'
          },
          {
            name: 'updateAdlocationPayload'
          },
          {
            name: 'deleteAdlocationPayload'
          },
          {
            name: 'Advertiser'
          },
          {
            name: 'AdvertiserConnection'
          },
          {
            name: 'AdvertiserAggregator'
          },
          {
            name: 'AdvertiserGroupBy'
          },
          {
            name: 'AdvertiserConnectionId'
          },
          {
            name: 'AdvertiserConnectionCreated_at'
          },
          {
            name: 'AdvertiserConnectionUpdated_at'
          },
          {
            name: 'AdvertiserConnectionName'
          },
          {
            name: 'AdvertiserConnectionEmail'
          },
          {
            name: 'AdvertiserConnectionCompany'
          },
          {
            name: 'AdvertiserConnectionCampaign'
          },
          {
            name: 'AdvertiserConnectionCreated_by'
          },
          {
            name: 'AdvertiserConnectionUpdated_by'
          },
          {
            name: 'createAdvertiserPayload'
          },
          {
            name: 'updateAdvertiserPayload'
          },
          {
            name: 'deleteAdvertiserPayload'
          },
          {
            name: 'Author'
          },
          {
            name: 'AuthorConnection'
          },
          {
            name: 'AuthorAggregator'
          },
          {
            name: 'AuthorGroupBy'
          },
          {
            name: 'AuthorConnectionId'
          },
          {
            name: 'AuthorConnectionCreated_at'
          },
          {
            name: 'AuthorConnectionUpdated_at'
          },
          {
            name: 'AuthorConnectionName'
          },
          {
            name: 'AuthorConnectionEmail'
          },
          {
            name: 'AuthorConnectionBio'
          },
          {
            name: 'AuthorConnectionAvatar'
          },
          {
            name: 'AuthorConnectionCreated_by'
          },
          {
            name: 'AuthorConnectionUpdated_by'
          },
          {
            name: 'createAuthorPayload'
          },
          {
            name: 'updateAuthorPayload'
          },
          {
            name: 'deleteAuthorPayload'
          },
          {
            name: 'Banner'
          },
          {
            name: 'BannerConnection'
          },
          {
            name: 'BannerAggregator'
          },
          {
            name: 'BannerGroupBy'
          },
          {
            name: 'BannerConnectionId'
          },
          {
            name: 'BannerConnectionCreated_at'
          },
          {
            name: 'BannerConnectionUpdated_at'
          },
          {
            name: 'BannerConnectionTitle'
          },
          {
            name: 'BannerConnectionUrl'
          },
          {
            name: 'BannerConnectionAdvertiser'
          },
          {
            name: 'BannerConnectionExpiry'
          },
          {
            name: 'BannerConnectionSize'
          },
          {
            name: 'BannerConnectionAdcampaign'
          },
          {
            name: 'BannerConnectionAdlocation'
          },
          {
            name: 'BannerConnectionNotes'
          },
          {
            name: 'BannerConnectionCreated_by'
          },
          {
            name: 'BannerConnectionUpdated_by'
          },
          {
            name: 'createBannerPayload'
          },
          {
            name: 'updateBannerPayload'
          },
          {
            name: 'deleteBannerPayload'
          },
          {
            name: 'Blog'
          },
          {
            name: 'BlogConnection'
          },
          {
            name: 'BlogAggregator'
          },
          {
            name: 'BlogGroupBy'
          },
          {
            name: 'BlogConnectionId'
          },
          {
            name: 'BlogConnectionCreated_at'
          },
          {
            name: 'BlogConnectionUpdated_at'
          },
          {
            name: 'BlogConnectionTitle'
          },
          {
            name: 'BlogConnectionContent'
          },
          {
            name: 'BlogConnectionData'
          },
          {
            name: 'BlogConnectionSeo'
          },
          {
            name: 'BlogConnectionHero'
          },
          {
            name: 'BlogConnectionSlug'
          },
          {
            name: 'BlogConnectionPublished'
          },
          {
            name: 'BlogConnectionExcerpt'
          },
          {
            name: 'BlogConnectionAuthor'
          },
          {
            name: 'BlogConnectionCreated_by'
          },
          {
            name: 'BlogConnectionUpdated_by'
          },
          {
            name: 'createBlogPayload'
          },
          {
            name: 'updateBlogPayload'
          },
          {
            name: 'deleteBlogPayload'
          },
          {
            name: 'Client'
          },
          {
            name: 'ClientConnection'
          },
          {
            name: 'ClientAggregator'
          },
          {
            name: 'ClientGroupBy'
          },
          {
            name: 'ClientConnectionId'
          },
          {
            name: 'ClientConnectionCreated_at'
          },
          {
            name: 'ClientConnectionUpdated_at'
          },
          {
            name: 'ClientConnectionName'
          },
          {
            name: 'ClientConnectionLocation'
          },
          {
            name: 'ClientConnectionSlug'
          },
          {
            name: 'ClientConnectionDescription'
          },
          {
            name: 'ClientConnectionLogo'
          },
          {
            name: 'ClientConnectionServices'
          },
          {
            name: 'ClientConnectionWebsite'
          },
          {
            name: 'ClientConnectionSector'
          },
          {
            name: 'ClientConnectionCreated_by'
          },
          {
            name: 'ClientConnectionUpdated_by'
          },
          {
            name: 'createClientPayload'
          },
          {
            name: 'updateClientPayload'
          },
          {
            name: 'deleteClientPayload'
          },
          {
            name: 'Config'
          },
          {
            name: 'updateConfigPayload'
          },
          {
            name: 'deleteConfigPayload'
          },
          {
            name: 'Content'
          },
          {
            name: 'ContentConnection'
          },
          {
            name: 'ContentAggregator'
          },
          {
            name: 'ContentGroupBy'
          },
          {
            name: 'ContentConnectionId'
          },
          {
            name: 'ContentConnectionCreated_at'
          },
          {
            name: 'ContentConnectionUpdated_at'
          },
          {
            name: 'ContentConnectionName'
          },
          {
            name: 'ContentConnectionContent'
          },
          {
            name: 'ContentConnectionMedia'
          },
          {
            name: 'ContentConnectionMeta'
          },
          {
            name: 'ContentConnectionCtaLink'
          },
          {
            name: 'ContentConnectionCtaText'
          },
          {
            name: 'ContentConnectionSlug'
          },
          {
            name: 'ContentConnectionScreen'
          },
          {
            name: 'ContentConnectionCreated_by'
          },
          {
            name: 'ContentConnectionUpdated_by'
          },
          {
            name: 'createContentPayload'
          },
          {
            name: 'updateContentPayload'
          },
          {
            name: 'deleteContentPayload'
          },
          {
            name: 'Event'
          },
          {
            name: 'EventConnection'
          },
          {
            name: 'EventAggregator'
          },
          {
            name: 'EventGroupBy'
          },
          {
            name: 'EventConnectionId'
          },
          {
            name: 'EventConnectionCreated_at'
          },
          {
            name: 'EventConnectionUpdated_at'
          },
          {
            name: 'EventConnectionName'
          },
          {
            name: 'EventConnectionDate'
          },
          {
            name: 'EventConnectionVenue'
          },
          {
            name: 'EventConnectionAddress'
          },
          {
            name: 'EventConnectionWebsite'
          },
          {
            name: 'EventConnectionDescription'
          },
          {
            name: 'EventConnectionSlug'
          },
          {
            name: 'EventConnectionCreated_by'
          },
          {
            name: 'EventConnectionUpdated_by'
          },
          {
            name: 'createEventPayload'
          },
          {
            name: 'updateEventPayload'
          },
          {
            name: 'deleteEventPayload'
          },
          {
            name: 'Programme'
          },
          {
            name: 'ProgrammeConnection'
          },
          {
            name: 'ProgrammeAggregator'
          },
          {
            name: 'ProgrammeGroupBy'
          },
          {
            name: 'ProgrammeConnectionId'
          },
          {
            name: 'ProgrammeConnectionCreated_at'
          },
          {
            name: 'ProgrammeConnectionUpdated_at'
          },
          {
            name: 'ProgrammeConnectionName'
          },
          {
            name: 'ProgrammeConnectionDescription'
          },
          {
            name: 'ProgrammeConnectionImage'
          },
          {
            name: 'ProgrammeConnectionCreated_by'
          },
          {
            name: 'ProgrammeConnectionUpdated_by'
          },
          {
            name: 'createProgrammePayload'
          },
          {
            name: 'updateProgrammePayload'
          },
          {
            name: 'deleteProgrammePayload'
          },
          {
            name: 'Referral'
          },
          {
            name: 'ReferralConnection'
          },
          {
            name: 'ReferralAggregator'
          },
          {
            name: 'ReferralGroupBy'
          },
          {
            name: 'ReferralConnectionId'
          },
          {
            name: 'ReferralConnectionCreated_at'
          },
          {
            name: 'ReferralConnectionUpdated_at'
          },
          {
            name: 'ReferralConnectionName'
          },
          {
            name: 'ReferralConnectionDateOfBirth'
          },
          {
            name: 'ReferralConnectionNiNumber'
          },
          {
            name: 'ReferralConnectionProgrammes'
          },
          {
            name: 'ReferralConnectionReferrer'
          },
          {
            name: 'ReferralConnectionDescription'
          },
          {
            name: 'ReferralConnectionCreated_by'
          },
          {
            name: 'ReferralConnectionUpdated_by'
          },
          {
            name: 'createReferralPayload'
          },
          {
            name: 'updateReferralPayload'
          },
          {
            name: 'deleteReferralPayload'
          },
          {
            name: 'Screen'
          },
          {
            name: 'ScreenConnection'
          },
          {
            name: 'ScreenAggregator'
          },
          {
            name: 'ScreenGroupBy'
          },
          {
            name: 'ScreenConnectionId'
          },
          {
            name: 'ScreenConnectionCreated_at'
          },
          {
            name: 'ScreenConnectionUpdated_at'
          },
          {
            name: 'ScreenConnectionTitle'
          },
          {
            name: 'ScreenConnectionSlug'
          },
          {
            name: 'ScreenConnectionUrl'
          },
          {
            name: 'ScreenConnectionContent'
          },
          {
            name: 'ScreenConnectionPublished'
          },
          {
            name: 'ScreenConnectionMeta'
          },
          {
            name: 'ScreenConnectionHero'
          },
          {
            name: 'ScreenConnectionSeo'
          },
          {
            name: 'ScreenConnectionCreated_by'
          },
          {
            name: 'ScreenConnectionUpdated_by'
          },
          {
            name: 'createScreenPayload'
          },
          {
            name: 'updateScreenPayload'
          },
          {
            name: 'deleteScreenPayload'
          },
          {
            name: 'Taxonomy'
          },
          {
            name: 'TaxonomyConnection'
          },
          {
            name: 'TaxonomyAggregator'
          },
          {
            name: 'TaxonomyGroupBy'
          },
          {
            name: 'TaxonomyConnectionId'
          },
          {
            name: 'TaxonomyConnectionCreated_at'
          },
          {
            name: 'TaxonomyConnectionUpdated_at'
          },
          {
            name: 'TaxonomyConnectionName'
          },
          {
            name: 'TaxonomyConnectionType'
          },
          {
            name: 'TaxonomyConnectionSlug'
          },
          {
            name: 'TaxonomyConnectionCreated_by'
          },
          {
            name: 'TaxonomyConnectionUpdated_by'
          },
          {
            name: 'createTaxonomyPayload'
          },
          {
            name: 'updateTaxonomyPayload'
          },
          {
            name: 'deleteTaxonomyPayload'
          },
          {
            name: 'UploadFile'
          },
          {
            name: 'UploadFileConnection'
          },
          {
            name: 'UploadFileAggregator'
          },
          {
            name: 'UploadFileAggregatorSum'
          },
          {
            name: 'UploadFileAggregatorAvg'
          },
          {
            name: 'UploadFileAggregatorMin'
          },
          {
            name: 'UploadFileAggregatorMax'
          },
          {
            name: 'UploadFileGroupBy'
          },
          {
            name: 'UploadFileConnectionId'
          },
          {
            name: 'UploadFileConnectionCreated_at'
          },
          {
            name: 'UploadFileConnectionUpdated_at'
          },
          {
            name: 'UploadFileConnectionName'
          },
          {
            name: 'UploadFileConnectionAlternativeText'
          },
          {
            name: 'UploadFileConnectionCaption'
          },
          {
            name: 'UploadFileConnectionWidth'
          },
          {
            name: 'UploadFileConnectionHeight'
          },
          {
            name: 'UploadFileConnectionFormats'
          },
          {
            name: 'UploadFileConnectionHash'
          },
          {
            name: 'UploadFileConnectionExt'
          },
          {
            name: 'UploadFileConnectionMime'
          },
          {
            name: 'UploadFileConnectionSize'
          },
          {
            name: 'UploadFileConnectionUrl'
          },
          {
            name: 'UploadFileConnectionPreviewUrl'
          },
          {
            name: 'UploadFileConnectionProvider'
          },
          {
            name: 'UploadFileConnectionProvider_metadata'
          },
          {
            name: 'UploadFileConnectionCreated_by'
          },
          {
            name: 'UploadFileConnectionUpdated_by'
          },
          {
            name: 'UsersPermissionsPermission'
          },
          {
            name: 'UsersPermissionsRole'
          },
          {
            name: 'UsersPermissionsRoleConnection'
          },
          {
            name: 'UsersPermissionsRoleAggregator'
          },
          {
            name: 'UsersPermissionsRoleGroupBy'
          },
          {
            name: 'UsersPermissionsRoleConnectionId'
          },
          {
            name: 'UsersPermissionsRoleConnectionName'
          },
          {
            name: 'UsersPermissionsRoleConnectionDescription'
          },
          {
            name: 'UsersPermissionsRoleConnectionType'
          },
          {
            name: 'UsersPermissionsRoleConnectionCreated_by'
          },
          {
            name: 'UsersPermissionsRoleConnectionUpdated_by'
          },
          {
            name: 'createRolePayload'
          },
          {
            name: 'updateRolePayload'
          },
          {
            name: 'deleteRolePayload'
          },
          {
            name: 'UsersPermissionsUser'
          },
          {
            name: 'UsersPermissionsUserConnection'
          },
          {
            name: 'UsersPermissionsUserAggregator'
          },
          {
            name: 'UsersPermissionsUserGroupBy'
          },
          {
            name: 'UsersPermissionsUserConnectionId'
          },
          {
            name: 'UsersPermissionsUserConnectionCreated_at'
          },
          {
            name: 'UsersPermissionsUserConnectionUpdated_at'
          },
          {
            name: 'UsersPermissionsUserConnectionUsername'
          },
          {
            name: 'UsersPermissionsUserConnectionEmail'
          },
          {
            name: 'UsersPermissionsUserConnectionProvider'
          },
          {
            name: 'UsersPermissionsUserConnectionConfirmed'
          },
          {
            name: 'UsersPermissionsUserConnectionBlocked'
          },
          {
            name: 'UsersPermissionsUserConnectionRole'
          },
          {
            name: 'UsersPermissionsUserConnectionReferral'
          },
          {
            name: 'UsersPermissionsUserConnectionCreated_by'
          },
          {
            name: 'UsersPermissionsUserConnectionUpdated_by'
          },
          {
            name: 'createUserPayload'
          },
          {
            name: 'updateUserPayload'
          },
          {
            name: 'deleteUserPayload'
          },
          {
            name: 'ComponentDataClient'
          },
          {
            name: 'ComponentDataContact'
          },
          {
            name: 'ComponentDataData'
          },
          {
            name: 'ComponentDataEducation'
          },
          {
            name: 'ComponentDataFaq'
          },
          {
            name: 'ComponentDataHero'
          },
          {
            name: 'ComponentDataLink'
          },
          {
            name: 'ComponentDataLinkgroup'
          },
          {
            name: 'ComponentDataProfile'
          },
          {
            name: 'ComponentDataSeo'
          },
          {
            name: 'ComponentDataService'
          },
          {
            name: 'ComponentUserContentComments'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'ScreenDataDynamicZone',
        possibleTypes: [
          {
            name: 'ComponentDataContact'
          },
          {
            name: 'ComponentDataClient'
          },
          {
            name: 'ComponentDataService'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'ContentDataDynamicZone',
        possibleTypes: [
          {
            name: 'ComponentDataLink'
          },
          {
            name: 'ComponentDataClient'
          }
        ]
      }
    ]
  }
}
export default result
