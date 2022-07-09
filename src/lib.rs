use std::{env, error::Error, fs};

#[derive(Debug)]
pub struct Config {
  pub query: String,
  pub filename: String,
  pub case_sensitive: bool,
}

impl Config {
  pub fn new(args: &[String]) -> Result<Config, &str> {
    if args.len() < 3 {
      return Err("not enough arguments");
    }
    let query = &args[1];
    let filename = &args[2];
    Ok(Config {
      query: query.to_string(),
      filename: filename.to_string(),
      case_sensitive: env::var("CASE_INSENSITIVE").is_err(),
    })
  }
}

pub fn run(config: Config) -> Result<(), Box<dyn Error>> {
  let contents = fs::read_to_string(config.filename.as_str())?;
  let results = match config.case_sensitive {
    true => search(&config.query, &contents),
    false => search_case_insensitive(&config.query, &contents),
  };
  for line in results {
    println!("{}", line);
  }
  Ok(())
}

pub fn search<'a>(query: &str, contents: &'a str) -> Vec<&'a str> {
  let mut result = Vec::new();
  for line in contents.lines() {
    if line.contains(query) {
      result.push(line.trim());
    }
  }
  result
}
pub fn search_case_insensitive<'a>(query: &str, contents: &'a str) -> Vec<&'a str> {
  let mut result = Vec::new();
  for line in contents.lines() {
    if line.to_lowercase().contains(query.to_lowercase().as_str()) {
      result.push(line.trim());
    }
  }
  result
}

#[cfg(test)]
mod tests {
  // import from parent
  use super::*;

  #[test]
  fn one_result() {
    let query = "duct";
    let contents = "\
Rust:
safe, fast, productive.
Pick three.";
    assert_eq!(vec!["safe, fast, productive."], search(query, contents));
  }
  #[test]
  fn case_sensitive() {
    let query = "DuCt";
    let contents = "\
Rust:
safe, fast, productive.
Pick three.";
    assert_eq!(
      vec!["safe, fast, productive."],
      search_case_insensitive(query, contents)
    );
  }
}
