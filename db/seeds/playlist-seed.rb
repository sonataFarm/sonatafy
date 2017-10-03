class PlaylistSeed
  def self.title
    case rand(0..3)
    when 0
      "#{music_categories.sample} #{prepositional_phrases.sample}"
    when 1
      "#{musician_adjectives.sample} #{nationalities.sample} #{musicians.sample}"
    when 2
      "#{music_adjectives.sample} #{music_categories.sample}"
    when 3
      "#{performers.sample} #{performer_participles.sample} #{music_adjectives.sample} #{music_categories.sample}"
    end
  end

  def self.music_categories
    %w[Symphonies Concerti Pieces Works Masterpieces Songs Music]
  end

  def self.prepositional_phrases
    [
      "for Finnicky #{performers.sample}",
      "for Ironing",
      "for In-law Visits",
      "Nobody Really Likes",
      "Every Snob Loves to Hate",
      "for Infants",
      "of the 9th and 10th Centuries",
      "for Sleeping",
      "for Elevators"
    ]
  end

  def self.music_adjectives
      %w[Weird Awkward Superhilarious Totally\ Unplayable Disproportionately\ Famous Quietest]
  end

  def self.musician_adjectives
    %w[Neurotic Tone-Deaf Angry Rude Thrifty Impoverished Whiny Unnotable Awkward Superhilarious Disproportionately\ Famous Quietest]
  end

  def self.nationalities
    %w[Russian German French Italian Belgian British Franco-Flemish American]
  end

  def self.performers
    %w[Violinists Sopranos Tenors Pianists Harpsichordists]
  end

  def self.performer_participles
    %w[Screeching Singing Playing Attempting Riffing\ On Trilling Messing\ Up]
  end

  def self.musicians
    performers + %w[Conductors Composers]
  end
end
