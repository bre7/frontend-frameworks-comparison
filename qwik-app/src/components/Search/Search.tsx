import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <input
      title=""
      data-drupal-selector="edit-search-api-fulltext"
      class="form-search form-control"
      placeholder="Mots-clés, technologies, etc."
      type="search"
      id="edit-search-api-fulltext"
      name="search_api_fulltext"
      size={150}
      maxLength={128}
      data-toggle="tooltip"
      data-original-title=""
    />
  );
});
