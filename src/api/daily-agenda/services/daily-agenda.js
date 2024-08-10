'use strict';

/**
 * daily-agenda service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::daily-agenda.daily-agenda');
