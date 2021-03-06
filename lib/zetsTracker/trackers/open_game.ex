defmodule ZetsTracker.Trackers.OpenGame do
  use Ecto.Schema
  import Ecto.Changeset
  alias ZetsTracker.Trackers.OpenGame


  schema "open_games" do
    field :edit_token, :string

    timestamps()
  end

  @doc false
  def changeset(%OpenGame{} = open_game, attrs) do
    open_game
    |> cast(attrs, [:edit_token])
    |> validate_required([:edit_token])
  end
end
