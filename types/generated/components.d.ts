import type { Schema, Attribute } from '@strapi/strapi';

export interface TextText extends Schema.Component {
  collectionName: 'components_text_texts';
  info: {
    displayName: 'text';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface PrayersCitiPrayer extends Schema.Component {
  collectionName: 'components_prayers_citi_prayers';
  info: {
    displayName: 'CityPrayer';
    description: '';
  };
  attributes: {
    fajr: Attribute.Time & Attribute.DefaultTo<'00:00'>;
    zuhr: Attribute.Time & Attribute.DefaultTo<'00:00'>;
    asr: Attribute.Time & Attribute.DefaultTo<'00:00'>;
    maghrib: Attribute.Time & Attribute.DefaultTo<'00:00'>;
    isha: Attribute.Time & Attribute.DefaultTo<'00:00'>;
  };
}

export interface MediaSlideMedia extends Schema.Component {
  collectionName: 'components_media_slide_medias';
  info: {
    displayName: 'SlideMedia';
    description: '';
  };
  attributes: {
    youtube: Attribute.String;
    image_source: Attribute.Media<'images'>;
    video_source: Attribute.Media<'videos'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'text.text': TextText;
      'prayers.citi-prayer': PrayersCitiPrayer;
      'media.slide-media': MediaSlideMedia;
    }
  }
}
