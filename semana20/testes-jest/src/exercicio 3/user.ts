enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
  }
  
  enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
  }
  
interface Client {
    name: string;
    age: number;
    nacionality: NACIONALITY;
  }
  
interface Casino {
    name: string;
    location: LOCATION;
  }

interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
  }
  
interface ResultItem {
    allowed: string[];
    unallowed: string[];
  }