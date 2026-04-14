import Types "../types/products";
import ProductsLib "../lib/products";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

mixin (
  products : List.List<Types.Product>,
  contacts : List.List<Types.ContactSubmission>,
  nextProductId : { var value : Nat },
  nextContactId : { var value : Nat },
) {

  // ── Admin guard helper ───────────────────────────────────────────────────────

  func requireAdmin(token : Text) {
    if (not ProductsLib.validateSession(token)) {
      Runtime.trap("Unauthorized: invalid or missing session token");
    };
  };

  // ── Products ─────────────────────────────────────────────────────────────────

  public shared func addProduct(token : Text, input : Types.CreateProductInput) : async Types.Product {
    requireAdmin(token);
    let product = ProductsLib.createProduct(products, nextProductId.value, input);
    nextProductId.value += 1;
    product;
  };

  public query func listProducts(filter : Types.ProductFilter) : async [Types.Product] {
    ProductsLib.getProducts(products, filter);
  };

  public query func getProduct(id : Types.ProductId) : async ?Types.Product {
    ProductsLib.getProduct(products, id);
  };

  public shared func updateProduct(token : Text, input : Types.UpdateProductInput) : async Bool {
    requireAdmin(token);
    ProductsLib.updateProduct(products, input);
  };

  public shared func deleteProduct(token : Text, id : Types.ProductId) : async Bool {
    requireAdmin(token);
    ProductsLib.deleteProduct(products, id);
  };

  // ── Contact ──────────────────────────────────────────────────────────────────

  public shared func submitContactForm(input : Types.ContactInput) : async Types.ContactSubmission {
    let submission = ProductsLib.submitContact(contacts, nextContactId.value, input);
    nextContactId.value += 1;
    submission;
  };

  public query func listContactSubmissions(token : Text) : async [Types.ContactSubmission] {
    requireAdmin(token);
    ProductsLib.getContacts(contacts);
  };

  // ── Admin Auth ────────────────────────────────────────────────────────────────

  public shared func adminLogin(email : Text, password : Text) : async Types.AdminLoginResult {
    ProductsLib.adminLogin(email, password);
  };
};
