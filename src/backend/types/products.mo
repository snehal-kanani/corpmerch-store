module {
  public type ProductId = Nat;
  public type ContactId = Nat;
  public type Timestamp = Int;

  public type Category = {
    #tshirt;
    #cap;
    #bag;
  };

  public type SortOrder = {
    #priceAsc;
    #priceDesc;
    #newest;
    #featured;
  };

  public type Product = {
    id : ProductId;
    name : Text;
    category : Category;
    price : Float;
    description : Text;
    imageUrl : Text;
    stockQty : Nat;
    featured : Bool;
    createdAt : Timestamp;
    updatedAt : Timestamp;
  };

  public type CreateProductInput = {
    name : Text;
    category : Category;
    price : Float;
    description : Text;
    imageUrl : Text;
    stockQty : Nat;
    featured : Bool;
  };

  public type UpdateProductInput = {
    id : ProductId;
    name : Text;
    category : Category;
    price : Float;
    description : Text;
    imageUrl : Text;
    stockQty : Nat;
    featured : Bool;
  };

  public type ProductFilter = {
    category : ?Category;
    searchQuery : ?Text;
    sortOrder : ?SortOrder;
  };

  public type ContactSubmission = {
    id : ContactId;
    name : Text;
    email : Text;
    message : Text;
    createdAt : Timestamp;
  };

  public type ContactInput = {
    name : Text;
    email : Text;
    message : Text;
  };

  public type AdminLoginResult = {
    #ok : Text;
    #err : Text;
  };
};
