class Search
  attr_reader :query, :columns, :query_string, :query_terms
  def initialize(query)
    @query = query
  end

  def tracks(limit = nil)
    @query_string = '(tracks.title ILIKE ? OR composers.name ILIKE ?)'
    @columns = 2
    Track.joins(:composer).where(
      *compose_query
    ).limit(limit)
  end

  def compose_query
    # returns an array of query string followed by args
    composed = []
    composed << ([query_string] * query_terms.count).join(' AND ')
    composed += (ilike_query_terms * columns).sort
    composed
  end

  def query_terms
    query.split
  end

  def ilike_query_terms
    query_terms.map { |term| "%#{term}%" }
  end
end
