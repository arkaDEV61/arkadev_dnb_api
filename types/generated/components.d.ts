import type { Schema, Attribute } from '@strapi/strapi';

export interface HajjUmraHotelHajjUmraHotel extends Schema.Component {
  collectionName: 'components_hajj_umra_hotel_hajj_umra_hotels';
  info: {
    displayName: 'HajjUmraHotel';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    address: Attribute.String;
    longitude: Attribute.Float;
    latitude: Attribute.Float;
    city: Attribute.String;
  };
}

export interface HajjUmraVodicHajjUmraVodic extends Schema.Component {
  collectionName: 'components_hajj_umra_vodic_hajj_umra_vodics';
  info: {
    displayName: 'HajjUmraVodic';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    phone: Attribute.String;
    group: Attribute.String;
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
    image_source: Attribute.Media;
    video_source: Attribute.Media;
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

export interface TextText extends Schema.Component {
  collectionName: 'components_text_texts';
  info: {
    displayName: 'text';
  };
  attributes: {
    text: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'hajj-umra-hotel.hajj-umra-hotel': HajjUmraHotelHajjUmraHotel;
      'hajj-umra-vodic.hajj-umra-vodic': HajjUmraVodicHajjUmraVodic;
      'media.slide-media': MediaSlideMedia;
      'prayers.citi-prayer': PrayersCitiPrayer;
      'text.text': TextText;
    }
  }
}
