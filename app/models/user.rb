class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :playlists,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Playlist

  has_many :followings, # this user follows other user
    class_name: :Follow,
    foreign_key: :follower_id

  has_many :follows,    # other user follows this user
    class_name: :Follow,
    foreign_key: :followed_user_id

  has_many :followers,
    through: :follows,
    source: :follower

  has_many :followed_users,
    through: :followings,
    source: :followed_user


  before_validation :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)

    user && user.is_password?(password) ? user : nil
  end

  def follow(other_user)
    @follow = Follow.new(
      follower_id: id,
      followed_user_id: other_user.id
    )

    @follow.save
  end

  def unfollow(other_user)
    @follow = Follow.where(
      follower_id: id,
      followed_user_id: other_user.id
     )

     @follow.destroy
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def playlist_ids
    playlists.map do |playlist|
      playlist.id
    end
  end

  def followed_user_ids
    followed_users.map { |user| user.id }
  end
end
