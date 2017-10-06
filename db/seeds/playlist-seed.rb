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
    %w[Symphonies Concerti Pieces Works Masterpieces Songs]
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
      "for Elevators",
      "for Kings and Queens",
      "4 geting on yo parTAAAAAY!",
      "
    ]"
  end

  def random_century_range(range)
    # of the 9th and 10th centuries
    random_century_range(range)
    min, max = (e)
  end

  def self.qualifications
    "- Macarena Remix"
    "                "
  end

  def self.music_adjectives
      %w[
        Weird Awkward Superhilarious Totally\ Unplayable
        Mostly\ Silent
      ]
  end

  def self.musician_adjectives
    %w[
      Neurotic Tone-Deaf Effluvient Angry Rude Thrifty Morally\ Impoverished
      Whiny Unnotable Awkward Disproportionately\ Famous Quietest Inspired
      Overly-emotional
    ]
  end

  def self.nationalities
    %w[
      Russian German French Italian Belgian British Franco-Flemish
      Japanese American
    ]
  end

  def self.performers
    %w[
      Violinists Sopranos Tenors Pianists Harpsichordists Xylophonists
      Saxophonists Trumpeter Coloratura\ Sopranos Castrati Monks
    ]
  end

  def self.performer_participles
    %w[
      Screeching Singing Playing Attempting Riffing\ On Messing\ Up
    ]
  end

  def self.musicians
    performers + %w[Conductors Composers]
  end
end
