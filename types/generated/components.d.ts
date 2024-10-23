import type { Struct, Schema } from '@strapi/strapi';

export interface PrayersCitiPrayer extends Struct.ComponentSchema {
  collectionName: 'components_prayers_citi_prayers';
  info: {
    displayName: 'CityPrayer';
    description: '';
  };
  attributes: {
    fajr: Schema.Attribute.Time & Schema.Attribute.DefaultTo<'00:00'>;
    zuhr: Schema.Attribute.Time & Schema.Attribute.DefaultTo<'00:00'>;
    asr: Schema.Attribute.Time & Schema.Attribute.DefaultTo<'00:00'>;
    maghrib: Schema.Attribute.Time & Schema.Attribute.DefaultTo<'00:00'>;
    isha: Schema.Attribute.Time & Schema.Attribute.DefaultTo<'00:00'>;
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

export interface MediaSlideMedia extends Struct.ComponentSchema {
  collectionName: 'components_media_slide_medias';
  info: {
    displayName: 'SlideMedia';
    description: '';
  };
  attributes: {
    youtube: Schema.Attribute.String;
    image_source: Schema.Attribute.Media<'images'>;
    video_source: Schema.Attribute.Media<'videos'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'prayers.citi-prayer': PrayersCitiPrayer;
      'text.text': TextText;
      'media.slide-media': MediaSlideMedia;
    }
  }
}
