'use strict';

/**
 * majlis service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::majlis.majlis');
