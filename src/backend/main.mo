import Types "types/products";
import ProductsApi "mixins/products-api";
import ProductsLib "lib/products";
import List "mo:core/List";

actor {
  let products = List.empty<Types.Product>();
  let contacts = List.empty<Types.ContactSubmission>();
  let nextProductId = { var value : Nat = 1 };
  let nextContactId = { var value : Nat = 1 };

  // Seed sample data on first run (no-op if products already exist)
  ProductsLib.seedProducts(products, nextProductId);

  include ProductsApi(products, contacts, nextProductId, nextContactId);
};
