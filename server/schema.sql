CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(500) UNIQUE KEY NOT NULL,
    salt VARCHAR(500) NOT NULL,
    password VARCHAR(1000) NOT NULL, 
    created_at TIMESTAMP DEFAULT NOW()
);
INSERT INTO user (email, salt, password) VALUES 
('sohhyeonkim@gmail.com', '123', 'helloworld'),
('kshyun2006@naver.com', '123','helloworld')