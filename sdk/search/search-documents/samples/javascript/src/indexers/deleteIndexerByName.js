// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const {
  SearchIndexerClient,
  AzureKeyCredential
} = require("@azure/search-documents");
require("dotenv").config();

const endpoint = process.env.SEARCH_API_ENDPOINT || "";
const apiKey = process.env.SEARCH_API_KEY || "";

async function main() {
  console.log(`Running Delete Indexer Sample....`);

  const client = new SearchIndexerClient(endpoint, new AzureKeyCredential(apiKey));
  console.log(`Deleting Indexer my-azure-indexer-1`);
  await client.deleteIndexer("my-azure-indexer-1")
}

main();
