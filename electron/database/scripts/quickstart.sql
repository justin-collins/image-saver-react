insert or ignore into media (title, url, source, type, location) values ('Guide dog puppy in training wearing his specially made puppy harness to prepare him for his big boy harness', 'https://i.imgur.com/A8eQsll.jpg', 'https://imgur.com/A8eQsll', 'IMAGE', 'REMOTE');
insert or ignore into media (title, url, source, type, location) values ('The definition of puppy eyes', 'https://i.imgur.com/HNWMaIv.mp4', 'https://imgur.com/HNWMaIv', 'VIDEO', 'REMOTE');
insert or ignore into media (title, url, source, type, location) values ('Dog Bites Water', 'https://i.imgur.com/0IjHiKH.mp4', 'https://i.imgur.com/0IjHiKH', 'VIDEO', 'REMOTE');
insert or ignore into media (title, url, source, type, location) values ('Big smile', 'https://i.imgur.com/AaxWrOb.jpeg', 'https://imgur.com/AaxWrOb', 'IMAGE', 'REMOTE');
insert or ignore into media (title, url, source, type, location, trashed, trashed_at) values ('I''m puppy sitting this weekend and she the most beautiful golden. Don''t mind my dog in the background', 'https://i.imgur.com/fSgnUKW.jpg', 'https://imgur.com/fSgnUKW', 'IMAGE', 'REMOTE', 1, CURRENT_TIMESTAMP);
insert or ignore into albums (title) values ('Puppies');
insert or ignore into albumCovers (media_id, album_id) values (1, 1);
insert or ignore into mediaAlbumsMap (media_id, album_id) values (1, 1);
insert or ignore into mediaAlbumsMap (media_id, album_id) values (2, 1);
insert or ignore into tags (title) values ('dog');
insert or ignore into tags (title) values ('puppy');
insert or ignore into mediaTagsMap (media_id, tag_id) values(1, 1);
insert or ignore into mediaTagsMap (media_id, tag_id) values(1, 2);
insert or ignore into mediaTagsMap (media_id, tag_id) values(2, 2);
insert or ignore into mediaTagsMap (media_id, tag_id) values(3, 2);
