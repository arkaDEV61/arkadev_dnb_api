import type { Schema, Struct } from '@strapi/strapi';

export interface MediaSlideMedia extends Struct.ComponentSchema {
  collectionName: 'components_media_slide_medias';
  info: {
    description: '';
    displayName: 'SlideMedia';
  };
  attributes: {
    image_source: Schema.Attribute.Media<'images'>;
    video_source: Schema.Attribute.Media<'videos'>;
    youtube: Schema.Attribute.String;
  };
}

export interface PrayersCitiPrayer extends Struct.ComponentSchema {
  collectionName: 'components_prayers_citi_prayers';
  info: {
    description: '';
    displayName: 'CityPrayer';
  };
  attributes: {
    asr: Schema.Attribute.Time & Schema.Attribute.DefaultTo<'00:00'>;
    fajr: Schema.Attribute.Time & Schema.Attribute.DefaultTo<'00:00'>;
    isha: Schema.Attribute.Time & Schema.Attribute.DefaultTo<'00:00'>;
    maghrib: Schema.Attribute.Time & Schema.Attribute.DefaultTo<'00:00'>;
    zuhr: Schema.Attribute.Time & Schema.Attribute.DefaultTo<'00:00'>;
  };
}

export interface TextText extends Struct.ComponentSchema {
  collectionName: 'components_text_texts';
  info: {
    displayName: 'text';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'media.slide-media': MediaSlideMedia;
      'prayers.citi-prayer': PrayersCitiPrayer;
      'text.text': TextText;
    }
  }
}
