"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

let slugify = require("slugify");
let { sanitizeEntity } = require("strapi-utils");

async function addSlug(ctx, hook) {
  let blog = ctx.request.body;

  blog.slug = slugify(blog.title);

  console.log("addSlug -> blog", blog);

  let entity = await strapi.services.blog[hook](blog);

  return hook === "create"
    ? sanitizeEntity(entity, { model: strapi.models.blog })
    : await strapi.services.blog[hook](ctx.params, blog);
}

module.exports = {
  async create(ctx) {
    return await addSlug(ctx, "create");
  },
  async update(ctx) {
    return await addSlug(ctx, "update");
  }
};
