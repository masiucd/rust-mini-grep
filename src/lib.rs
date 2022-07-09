use std::{error::Error, fs};

#[derive(Debug)]
pub struct Config {
  pub query: String,
  pub filename: String,
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
    })
  }
}

pub fn run(config: Config) -> Result<(), Box<dyn Error>> {
  let contents = fs::read_to_string(config.filename.as_str())?;
  println!("With text:\n{}", contents);
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
}
