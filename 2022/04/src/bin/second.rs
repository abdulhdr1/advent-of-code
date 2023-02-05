use std::fs::read_to_string;

fn main() {
    let content = read_to_string("input.txt").unwrap();
    let lines: Vec<&str> = content.split("\n").collect();
    let mut acc = 0;

    for line in lines {
        let vec: Vec<&str> = line.split(",").collect();
        let first: Vec<&str> = vec[0].split("-").collect();
        let second: Vec<&str> = vec[1].split("-").collect();

        let first_lower = first[0].parse::<i32>().unwrap();
        let first_upper = first[1].parse::<i32>().unwrap();
        let second_lower = second[0].parse::<i32>().unwrap();
        let second_upper = second[1].parse::<i32>().unwrap();

        if first_lower >= second_lower && first_lower <= second_upper {
            acc += 1
        } else if first_upper >= second_lower && first_upper <= second_upper {
            acc += 1
        } else if second_lower >= first_lower && second_lower <= first_upper {
            acc += 1;
        }
    }
    println!("{}", acc);
}
