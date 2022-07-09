# Rust mini grep

## Set Env variable

```shell
  export CASE_INSENSITIVE=true
```

Then run the program

```rust
case_sensitive: env::var("CASE_INSENSITIVE").is_err(),
```

`is_err()` Will be false if no variable is set.

### Unset Env variable

```shell
  unset CASE_INSENSITIVE
```

Then run the program
