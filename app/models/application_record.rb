class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def self.random
    order("RANDOM()").first
  end

  def get_AWS_presigned_url(asset_path)
    Aws::S3::Resource.new
      .bucket(ENV["s3_bucket"])
      .object(asset_path)
      .presigned_url(:get)
  end
end
