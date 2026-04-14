import Types "../types/products";
import List "mo:core/List";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Float "mo:core/Float";

module {

  // ── Products ────────────────────────────────────────────────────────────────

  public func createProduct(
    products : List.List<Types.Product>,
    nextId : Nat,
    input : Types.CreateProductInput,
  ) : Types.Product {
    let now = Time.now();
    let product : Types.Product = {
      id = nextId;
      name = input.name;
      category = input.category;
      price = input.price;
      description = input.description;
      imageUrl = input.imageUrl;
      stockQty = input.stockQty;
      featured = input.featured;
      createdAt = now;
      updatedAt = now;
    };
    products.add(product);
    product;
  };

  public func getProducts(
    products : List.List<Types.Product>,
    filter : Types.ProductFilter,
  ) : [Types.Product] {
    // Step 1: filter by category and search
    var result = products.filter(func(p) {
      let categoryMatch = switch (filter.category) {
        case (null) true;
        case (?cat) p.category == cat;
      };
      let searchMatch = switch (filter.searchQuery) {
        case (null) true;
        case (?q) {
          let lower = q.toLower();
          p.name.toLower().contains(#text lower) or
          p.description.toLower().contains(#text lower);
        };
      };
      categoryMatch and searchMatch;
    });

    // Step 2: sort
    let arr = result.toArray();
    switch (filter.sortOrder) {
      case (null) arr;
      case (?#priceAsc) {
        arr.sort(func(a, b) {
          if (a.price < b.price) #less
          else if (a.price > b.price) #greater
          else #equal
        });
      };
      case (?#priceDesc) {
        arr.sort(func(a, b) {
          if (a.price > b.price) #less
          else if (a.price < b.price) #greater
          else #equal
        });
      };
      case (?#newest) {
        arr.sort(func(a, b) {
          if (a.createdAt > b.createdAt) #less
          else if (a.createdAt < b.createdAt) #greater
          else #equal
        });
      };
      case (?#featured) {
        arr.sort(func(a, b) {
          if (a.featured and not b.featured) #less
          else if (not a.featured and b.featured) #greater
          else #equal
        });
      };
    };
  };

  public func getProduct(
    products : List.List<Types.Product>,
    id : Types.ProductId,
  ) : ?Types.Product {
    products.find(func(p) { p.id == id });
  };

  public func updateProduct(
    products : List.List<Types.Product>,
    input : Types.UpdateProductInput,
  ) : Bool {
    let found = products.find(func(p) { p.id == input.id });
    switch (found) {
      case (null) false;
      case (?_) {
        let now = Time.now();
        products.mapInPlace(func(p) {
          if (p.id == input.id) {
            {
              p with
              name = input.name;
              category = input.category;
              price = input.price;
              description = input.description;
              imageUrl = input.imageUrl;
              stockQty = input.stockQty;
              featured = input.featured;
              updatedAt = now;
            }
          } else p
        });
        true;
      };
    };
  };

  public func deleteProduct(
    products : List.List<Types.Product>,
    id : Types.ProductId,
  ) : Bool {
    let sizeBefore = products.size();
    let filtered = products.filter(func(p) { p.id != id });
    products.clear();
    products.append(filtered);
    products.size() < sizeBefore;
  };

  // ── Contacts ────────────────────────────────────────────────────────────────

  public func submitContact(
    contacts : List.List<Types.ContactSubmission>,
    nextId : Nat,
    input : Types.ContactInput,
  ) : Types.ContactSubmission {
    let submission : Types.ContactSubmission = {
      id = nextId;
      name = input.name;
      email = input.email;
      message = input.message;
      createdAt = Time.now();
    };
    contacts.add(submission);
    submission;
  };

  public func getContacts(
    contacts : List.List<Types.ContactSubmission>,
  ) : [Types.ContactSubmission] {
    contacts.toArray();
  };

  // ── Admin Auth ───────────────────────────────────────────────────────────────

  let ADMIN_EMAIL = "admin@corpmerch.com";
  let ADMIN_PASSWORD = "Admin@123";

  public func adminLogin(
    email : Text,
    password : Text,
  ) : Types.AdminLoginResult {
    if (email == ADMIN_EMAIL and password == ADMIN_PASSWORD) {
      // Simple deterministic token based on timestamp (no crypto needed for MVP)
      let token = "admin-session-" # email # "-valid";
      #ok(token);
    } else {
      #err("Invalid email or password");
    };
  };

  public func validateSession(token : Text) : Bool {
    token == "admin-session-" # ADMIN_EMAIL # "-valid";
  };

  // ── Seed Data ────────────────────────────────────────────────────────────────

  public func seedProducts(
    products : List.List<Types.Product>,
    nextProductId : { var value : Nat },
  ) {
    if (products.size() > 0) return; // only seed if empty

    let seeds : [Types.CreateProductInput] = [
      {
        name = "Classic White T-Shirt";
        category = #tshirt;
        price = 299.0;
        description = "Premium 100% cotton white t-shirt with your company logo. Perfect for corporate events and gifting. Available in all sizes.";
        imageUrl = "";
        stockQty = 100;
        featured = true;
      },
      {
        name = "Black Corporate T-Shirt";
        category = #tshirt;
        price = 349.0;
        description = "Stylish black t-shirt made from soft cotton blend. Ideal for team uniforms and promotional merchandise.";
        imageUrl = "";
        stockQty = 80;
        featured = false;
      },
      {
        name = "Embroidered Baseball Cap";
        category = #cap;
        price = 199.0;
        description = "Adjustable structured baseball cap with premium embroidery on the front panel. One size fits all.";
        imageUrl = "";
        stockQty = 60;
        featured = true;
      },
      {
        name = "Flat Brim Snapback Cap";
        category = #cap;
        price = 249.0;
        description = "Modern flat brim snapback cap with custom logo print. Great for outdoor events and sports teams.";
        imageUrl = "";
        stockQty = 50;
        featured = false;
      },
      {
        name = "Canvas Tote Bag";
        category = #bag;
        price = 149.0;
        description = "Eco-friendly natural canvas tote bag with large print area. Perfect for trade shows and eco-conscious brands.";
        imageUrl = "";
        stockQty = 120;
        featured = true;
      },
      {
        name = "Executive Laptop Bag";
        category = #bag;
        price = 799.0;
        description = "Premium polyester laptop bag with padded compartment fits up to 15.6 inch laptops. Professional look for corporate gifting.";
        imageUrl = "";
        stockQty = 30;
        featured = true;
      },
    ];

    for (input in seeds.vals()) {
      let _ = createProduct(products, nextProductId.value, input);
      nextProductId.value += 1;
    };
  };
};
