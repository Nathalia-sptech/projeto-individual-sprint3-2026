USE DirectOn;
SHOW TABLES FROM DirectOn;

CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario VARCHAR(50),
    email VARCHAR(50),
    senha VARCHAR(50),
    fk_diretor_favorito INT
);

CREATE TABLE diretor (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100)
);

CREATE TABLE avaliacao (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT,
    fk_diretor INT,
    nota INT,
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
    FOREIGN KEY (fk_diretor) REFERENCES diretor(id)
);

CREATE TABLE comentario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT,
    fk_diretor INT,
    texto TEXT,
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
    FOREIGN KEY (fk_diretor) REFERENCES diretor(id)
);

ALTER TABLE usuario ADD FOREIGN KEY (fk_diretor_favorito) REFERENCES diretor(id);

INSERT INTO diretor (nome) VALUES 
('Hayao Miyazaki'),
('Martin Scorsese'),
('Francis F. Coppola'),
('Jordan Peele'),
('Ryan Coogler'),
('Walter Salles'),
('Sofia Coppola'),
('Quentin Tarantino');
