$branch="gh-pages"
$build_dir="_site"

# Force the files to be added, regardless of .gitignore
git add -f $build_dir

# Write tree to an object
$tree=$(git write-tree --prefix=$build_dir)

# Un-stage the build so it is back to being ignored
git reset -- $build_dir

# Create a new commit for that tree as a child of target branch's commit
$commit=$(git commit-tree -p $branch -m "Deploy" $tree)

# Update the GitHub Pages' branch to the new commit
git update-ref refs/heads/$branch $commit

# Push the compiled branch to GitHub
git push origin $branch --force
