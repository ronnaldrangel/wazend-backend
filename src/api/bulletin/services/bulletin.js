'use strict';

/**
 * bulletin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bulletin.bulletin');
